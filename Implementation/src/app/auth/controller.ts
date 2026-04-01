import type { Request, Response } from "express";
import { createHmac, randomBytes } from "node:crypto";
import { signupPayloadModel, signinPayloadModel  } from "./models.js";
import { db } from "../../db/index.js";
import { usersTables } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { createUserToken, type UserTokenPayload } from "./utils/token.js";

class AuthenticationController {
    public async handleSignup(req: Request, res:Response){
        const validationResult = await signupPayloadModel.safeParseAsync(req.body)
        if (validationResult.error) return res.status(400).json({message: "bodyValidationFailed", error: validationResult.error.issues})
        const {firstName, lastName, email, password} = validationResult.data

        const userEmailResult = await db.select().from(usersTables).where(eq(usersTables.email , email))
        if (userEmailResult.length > 0) return res.status(400).json({
            error: 'duplicate entry', message: `user with email:${email} already exists`
        })
        
        const salt = randomBytes(32).toString('hex')
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        const [result] = await db.insert(usersTables).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({id: usersTables.id})

        return res.status(201).json({message: "User created successfully", data: {id: result?.id}})
    }

    public async handleSignin(req: Request, res: Response) {
        const validationResult = await signinPayloadModel.safeParseAsync(req.body)

        if (validationResult.error) return res.status(400).json({ message: 'body validation failed', error: validationResult.error.issues })

        const { email, password } = validationResult.data

        const [userSelect] = await db.select().from(usersTables).where(eq(usersTables.email, email))

        if (!userSelect) return res.status(404).json({ message: `user with email ${email} does not exists` })

        const salt = userSelect.salt!
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        if (userSelect.password !== hash) return res.status(400).json({ message: `email or password is incorrect` })
            
        const token = createUserToken({id: userSelect.id})    

        return res.json({ message: 'Signin Success', data: { token: 1 } })

    }

    public async handleMe(req: Request, res: Response){
        //@ts-ignore
        const {id} = req.user! as UserTokenPayload
        const [userResult] = await db.select().from(usersTables).where(eq(usersTables.id, id))

        return res.json({
            firstName: userResult?.firstName,
            lastName: userResult?.lastName,
            email: userResult?.email
        })
    }
}

export default AuthenticationController