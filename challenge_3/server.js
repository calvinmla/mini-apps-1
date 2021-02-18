const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.post('/F1', (req, res) => {
  let data = req.body;
  db.insertUser(data, (error, result) => {
    if (error) console.log(error);
    else res.sendStatus(201);
  });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});