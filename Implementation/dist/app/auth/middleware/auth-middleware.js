import { verifyUserToken } from "../utils/token.js";
export function authenticationMiddleware() {
    return function (req, res, next) {
        const header = req.headers["authorization"];
        if (!header)
            next();
        if (!header?.startsWith("Bearer")) {
            return res
                .status(400)
                .json({ error: "authorization header must start with Bearer" });
        }
        const token = header.split(" ")[1];
        if (!token)
            return res
                .status(400)
                .json({ error: "authorization header must start with Bearer" });
        const user = verifyUserToken(token);
        //@ts-ignore
        req.user = user;
        next();
    };
}
export function restrictToAuthenticatedUser() {
    return function (req, res, next) {
        //@ts-ignore
        if (!req.user)
            return res.status(400).json({ error: 'Authentication Required' });
        return next();
    };
}
//# sourceMappingURL=auth-middleware.js.map