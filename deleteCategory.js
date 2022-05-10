
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
        let deleteCategory = await query(`
                    DELETE FROM shop.categories
                    WHERE id=?`,id);  
                    if (deleteItem.affectedRows == 0){
                        resolve('Topic ID does not exist!');
                    }else {
                        resolve('Question Deleted!');
                    }
  
    })
}