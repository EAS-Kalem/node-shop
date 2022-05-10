const mysql = require('mysql');
const util = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});
connection.connect();
const query = util.promisify(connection.query).bind(connection);


exports.func = req => {
    return new Promise(async (resolve, reject) => {
        let id = req.params.id
        console.log(req.params.id)
        let deleteQuestions = await query(`
                    SELECT * FROM shop.categories
                    WHERE id=?`,id);  

            resolve(deleteQuestions);
  
    })
}