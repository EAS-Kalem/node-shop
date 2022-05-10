
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
        let category = req.body.name
        let [findCategory] = await query(`
                    SELECT * FROM shop.categories WHERE name=?
                    `, category);
        console.log(category)
        if (!findCategory) {
            let { insertId } = await query(`
                            INSERT INTO shop.categories
                            (name) 
                            VALUES (?)
                        `, category);
                        resolve(insertId);
        } else {
            resolve("Category already exists!");

        }
    })
}