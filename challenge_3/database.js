const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  database: 'checkout'
});

db.connect(error => {
  if (error) console.log(error);
});

module.exports = {

  createUser: (cb) => {
    const query = `INSERT INTO user () VALUES ()`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error))
      else cb(null, results)
    })
  },

  updateUser: (data, cb) => {
    const query = `INSERT INTO user (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.password}')`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error), null)
      else cb(null, console.log('User info updated'))
    })
  },

  updateContactInfo: (data, cb) => {

  }

}
