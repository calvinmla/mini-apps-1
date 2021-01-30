const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json());

app.post('/', (req, res) => {
  let = csvReport = getColumnData(JSON.parse(req.body.data));
  res.send(console.log('Received!'));
  res.end();
});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`)
});

const getColumnData = (data) => {
  let csvData = Object.keys(data);
  csvData = csvData.slice(0, csvData.length - 1);
  csvData = csvData.join(',') + '\n';

  const getRowData = (object) => {
    let rowData = Object.values(object);
    rowData = rowData.slice(0, rowData.length - 1);
    rowData = rowData.join(',') + '\n';
    csvData = csvData + rowData;
    for (let i = 0; i < object.children.length; i++) {
      getRowData(object.children[i])
    }
  }
  getRowData(data);
  return csvData;
}