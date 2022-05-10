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
        try {
            let categories = await query(`
            SELECT * FROM shop.categories
        `)
            console.log(categories)
            resolve(categories)

        } catch (err) {
            reject("something went wrong!")
        }

    })
}