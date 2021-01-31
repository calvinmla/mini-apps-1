const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const funcs = require('./client/app');
const app = express();
const port = 3000;

// Points server to client folder to serve those files
app.use(express.static('client'));

// Middleware to parse request
app.use(bodyParser.urlencoded({ extended: true }));
// Need to look into why I don't need this
// ---> app.use(bodyParser.json());

// POST methods
// app.post('/text_area_upload_json', (req, res) => {
//   // Parse data and run function to convert data
//   const csvReport = funcs.convertToCSV(JSON.parse(req.body.textAreaData));
//   // Read html file and add converted JSON data
//   fs.readFile('./client/index.html', 'utf8', (err, html) => {
//     if (err) throw err;
//     res.status(201).send(html + '</br>' + csvReport);
//   })
// });

app.post('/file_picker_upload_json', (req, res) => {
  const file = req.body;
  console.log('file --->', file)
  res.send(file);

  // // Uses node's File System to write to server
  // fs.writeFile('./xfile_picker.json', file, (err) => {
  //   if (err) throw err;
  //   console.log('File has been saved.');
  // })

  // fs.readFile('./file_picker.json', 'utf8', (err, data) => {
  //   if (err) throw err;
  //   console.log('data --->', data);
  //   // const csvReport = funcs.convertToCSV(JSON.parse(data));
  //   // console.log(csvReport)
  // })

});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`)
});


// GET methods
// both still need work
// app.get('/', (req, res) => {
//   res.status(200);
// });

// app.get('/upload_json', (req, res) => {
//   res.status(200);
// });

