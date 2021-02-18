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
    else {
    console.log('server side ->',result);
    res.status(201).send(result);
    }
  })
})

app.post('/F1', (req, res) => {
  let data = req.body;
  db.updateUser(data, (error, result) => {
    if (error) console.log(error);
    else res.status(204).send();
  });
})

app.post('/F2', (req, res) => {
  let data = req.body;

})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});