const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Points server to client folder to serve those files
app.use(express.static('client'));

// Middleware to parse request
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json());

// GET method
app.get('/', (req, res) => {
  res.status(200);
})

// POST method
app.post('/upload_json', (req, res) => {
  // Parse data and run function that converts data
  let = csvReport = converToCSV(JSON.parse(req.body.data));
  res.status(201).send(csvReport);
});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`)
});

// Function that converts req data into CSV format
const converToCSV = (data) => {
  // Retrieve column values
  let csvData = Object.keys(data);
  csvData = csvData.slice(0, csvData.length - 1);
  csvData = csvData.join(',') + '</br>';

  // Recursive function that retrieves row values
  const getRowData = (object) => {
    let rowData = Object.values(object);
    rowData = rowData.slice(0, rowData.length - 1);
    rowData = rowData.join(',') + '</br>';
    csvData = csvData + rowData;
    for (let i = 0; i < object.children.length; i++) {
      getRowData(object.children[i])
    }
  }
  getRowData(data);
  return csvData;
}