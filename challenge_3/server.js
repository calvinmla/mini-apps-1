const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.post('/checkout', (req, res) => {
  db.createUser((error, result) => {
    if (error) console.log(error);
    else res.status(201).send(result);
  })
})

app.post('/f1', (req, res) => {
  let data = req.body;
  db.updateUser(data, (error, result) => {
    if (error) console.log(error);
    else res.status(201).send();
  });
})

app.post('/f2', (req, res) => {
  let data = req.body;
  db.updateContactInfo(data, (error, result) => {
    if (error) console.log(error);
    else res.status(201).send();
  });
})

app.post('/f3', (req, res) => {
  let data = req.body;
  db.updatePaymentInfo(data, (error, result) => {
    if (error) console.log(error);
    else res.status(201).send();
  });
})

app.post('/summary', (req, res) => {
  let data = req.body;
  db.getSummary(data, (error, results) => {
    if (error) console.log(error);
    else res.status(200).send(results);
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});