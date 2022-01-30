const db = require('../db/database');


exports.getAllData = async (req, res, next) => {
    const limit = 10;
    var offset = 0;

    if (req.query.offset && req.query.limit) {
        offset = parseInt(req.query.offset)
        if (isNaN(offset)) {
            return res.status(400).send({
                info: {
                    status: 'error',
                    code: 400,
                    message: 'Offset value is not the same as recommended value.',
                }
            });
        }
    }
    var sql = "select * from spare ORDER BY part_no limit ? offset ?"
    var params = [limit, offset]
    
    
    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(404).send({
                info: {
                    status: 'error',
                    code: 404,
                    message: 'Unexpected error in database.',
                    //message: err.message
                }
            });
        }
        if (rows.length == 0) {
            return res.status(404).send({
                info: {
                    status: 'error',
                    code: 404,
                    message: 'Not found spare parts in the system.',
                }
            });
        }
        return res.status(200).send({
            data: rows,
            next_page: 'GET /api/spares?limit=' + limit +'&offset=' + (offset+limit),
            info: {
                status: 'success',
                code: 200,
                message: 'Data fetching successful.',
            }
        });
    });
}