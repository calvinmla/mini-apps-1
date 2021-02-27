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
    const query = `UPDATE user SET name='${data.name}', email='${data.email}', password='${data.password}' WHERE id=${data.id}`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error), null)
      else cb(null, console.log('User info updated'))
    })
  },

  updateContactInfo: (data, cb) => {
    const query = `UPDATE user SET address='${data.address}', phone='${data.phone}' WHERE id=${data.id}`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error), null)
      else cb(null, console.log('User contact updated'))
    })
  },

  updatePaymentInfo: (data, cb) => {
    const query = `UPDATE user SET creditcard='${data.creditcard}', expiration=${data.expiration}, cvv=${data.cvv}, zipcode=${data.zipcode} WHERE id=${data.id}`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error), null)
      else cb(null, console.log('User payment updated'))
    })
  },

  getSummary: (data, cb) => {
    const query = `SELECT * FROM user WHERE id=${data.id}`;
    db.query(query, (error, results) => {
      if (error) cb(console.log(error))
      else cb(null, results[0])
    })
  }
}
