import httpStatus from 'http-status';
import jwt from 'jsonwebtoken'


// ['/users/login', '/users/register', '/categories', '/products', '/products/count']

const PUBLIC_URLS_REGEX = /\/users\/(login|register)|\/categories|\/products|\/products\/count/;


const byPassToken = (req) => {
    const url = req.url.toLowerCase().trim();
    return PUBLIC_URLS_REGEX.test(url);
};

const requireToken = (req, res) => {
    const token = req.headers?.['x-access-token'] ?? req.headers?.['authorization'] ?? null;
    if (!!token) {
        res.status(httpStatus.UNAUTHORIZED).json({
            message: 'Token is required',
        });
        return;
    }
    return token;
}


export default async function checkToken(req, res, next) {
    // check bypass 
    if (byPassToken(req)) {
        return next();
    }
    // check token
    try {
        const token = requireToken(req, res).replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const isExpired = decoded.exp < Date.now() / 1000;
        if (isExpired) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: 'Token is expired',
            });
        }
        return next();
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: 'Unauthorized',
            error: error.toString(),
        });
    }
}