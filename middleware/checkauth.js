const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        /*JWT is send with request header! 
        Format of it: Authorization : Bearer <token>
        */
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, '472D4B6150645367566B597033733576');
        req.userData = decodedToken;
        next();
    }catch(error) {
        return res.status(401).send({
            info: {
                status: 'error',
                code: 401,
                message: 'Unauthorized.',
            }
        });
    }
}