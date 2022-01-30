const jwt = require('jsonwebtoken');
const db = require('../db/database');


exports.jwtAuth = async (req, res, next) => {
    if (!req.body.secret_key) {
        return res.status(400).send({
            info: {
                status: 'error',
                code: 400,
                message: 'Secret key can not be empty!',
            }
        });
    } else {
        const secret_key = req.body.secret_key;
        var sql = "select * from user where secret_key = ?"
        var params = [secret_key]
        db.get(sql, params, (err, row) => {
            if (err) {
                return res.status(404).send({
                    info: {
                        status: 'error',
                        code: 404,
                        message: 'Unexpected error in database.',
                    }
                });
            }
            if (!row) {
                return res.status(404).send({
                    info: {
                        status: 'error',
                        code: 404,
                        message: 'User not found. Authentication failed.',
                    }
                });
            }

            const token = jwt.sign({
                uid: row.id,
                name: row.name,
                secret_key: row.secret_key
            },
                '472D4B6150645367566B597033733576',
                {
                    expiresIn: "1h"
                }
            )
            return res.status(200).send({
                token: token,
                info: {
                    status: 'success',
                    code: 200,
                    message: 'Authentication successful.',
                }
            });
        });
    }
}