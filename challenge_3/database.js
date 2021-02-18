const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  database: 'checkout'
});

db.connect(error => {
  if (error) console.log(error);
});

module.exports = {

  insertUser: (data, cb) => {
    const query = `INSERT INTO user (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.password}')`;

    db.query(query, (error, results) => {
      if (error) cb(console.log(error), null)
      else cb(null, console.log('Write success'))
    })
  }



}
