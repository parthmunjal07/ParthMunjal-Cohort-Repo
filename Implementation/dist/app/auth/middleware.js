import { verifyUserToken } from "./utils/token.js";
export function authenticationMiddleware() {
    return function (req, res, next) {
        const header = req.headers['authorization'];
        if (!header)
            next();
        if (!header?.startsWith('Bearer')) {
            return res.status(400).json({ error: 'authorizzation header must start' });
        }
        const token = header.split(' ')[1];
        if (!token)
            return res.status(400).json({ error: 'authorizzation header must start' });
        const user = verifyUserToken(token);
        // @ts-ignore
        req.user = user;
        next();
    };
}
export function restrictToAuthenticatedUser() {
    return function (req, res, next) {
        // @ts-ignore
        if (!req.user)
            return res.status(401).json({ error: 'Authentication Required' });
        return next();
    };
}
//# sourceMappingURL=middleware.js.map