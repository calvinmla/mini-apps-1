const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('client'));

app.post('/upload_json', (req, res) => {
  console.log(req.body);
  res.send(console.log('Received!'));
  res.end();
});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`)
});