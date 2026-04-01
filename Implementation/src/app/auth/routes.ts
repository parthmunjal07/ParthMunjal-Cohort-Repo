import express from "express";
import AuthenticationController from "./controller.js";
import { restrictToAuthenticatedUser } from "./middleware/auth-middleware.js";

export const authRouter = express.Router()

const authenticationController = new AuthenticationController()


authRouter.post('/sign-up', authenticationController.handleSignup.bind(authenticationController))
authRouter.post('/sign-in', authenticationController.handleSignin.bind(authenticationController))

authRouter.get('/me', restrictToAuthenticatedUser()), authenticationController.handleMe.bind(authenticationController)