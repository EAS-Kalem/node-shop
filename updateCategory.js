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
    let name = req.body.name
    console.log('herrro')
    let [findId] = await query(`
                    SELECT * FROM shop.categories WHERE id=?
                    `, req.params.id);
    console.log(req.params.id)
    if (findId) {
      let insertId = await query(`
           UPDATE shop.categories 
      SET name=? WHERE id=?`,
        [name, findId.id])

      resolve(insertId)
    } else {
      resolve("A category with this ID does not exist");
    }

  })
}