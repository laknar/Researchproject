var con = require('../../config/dbconnect');
class Utils{
    
    asynqQuery(query, params) {
        return new Promise((resolve, reject) => { //ask Anju what the promise concept is
            con.query(query, params, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

}
module.exports = Utils;