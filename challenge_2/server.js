const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();
const port = 3000;


// Points server to client folder to serve those files
app.use(express.static('client'));

// Middleware to parse request
app.use(bodyParser.urlencoded({ extended: true }));


/* -----Text area POST method----- */
app.post('/text_area_upload_json', (req, res) => {
  // Parse data and run function to convert data
  const csvReport = convertToCSV(JSON.parse(req.body.textAreaData));
  // Read html file and add converted JSON data
  fs.readFile('./client/index.html', 'utf8', (err, html) => {
    if (err) throw err;
    res.status(201).send(html + '</br>' + csvReport);
  })
});

/* -----File picker POST method----- */
// User upload.single to access uploaded file
app.post('/file_picker_upload_json', upload.single('filePickerData'), (req, res) => {
  // req.file contains the object. Path used to access in directory
  const filePath = req.file.path;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const csvReport = convertToCSV(JSON.parse(data));
    fs.readFile('./client/index.html', 'utf8', (err, html) => {
      if (err) throw err;
      res.status(201).send(html + '</br>' + csvReport);
    })
  })
});

/* -----AJAX POST method----- */
app.post('/ajax_upload_json', (req, res) => {
  const csvReport = convertToCSV(JSON.parse(req.body.ajaxData));
  // Uses node's File System to write to server
  fs.writeFile('./JQuery_AJAX.csv', csvReport, (err) => {
    if (err) throw err;
    console.log('File has been saved.');
    // res.sendFile or res.download or res.attachment
    res.status(201).set('Content-Type', 'text/csv').attachment('JQuery_AJAX.csv').sendFile(__dirname + '/JQuery_AJAX.csv');
  })
  // fs.readFile('./JQuery_AJAX.csv', 'utf8', (err, file) => {
  //   if (err) throw err;
  //   res.status(201).sendFile('./JQuery_AJAX.csv');
  // })
});


app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`)
});


// Function that converts req data into CSV format
const convertToCSV = (data) => {
  // Retrieve column values
  let csvData = Object.keys(data);
  csvData = csvData.slice(0, csvData.length - 1);
  csvData = csvData.join(',') + '\n';

  // Recursive function that retrieves row values
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
};