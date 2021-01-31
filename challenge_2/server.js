const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const funcs = require('./client/app');
const app = express();
const port = 3000;

// Points server to client folder to serve those files
app.use(express.static('client'));

// Middleware to parse request
app.use(bodyParser.urlencoded({ extended: true }));
// Need to look into why I don't need this
// ---> app.use(bodyParser.json());


app.post('/upload_json', upload.single('jsonFile'), (req, res) => {
  const filePath = req.file.path;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const csvReport = funcs.convertToCSV(JSON.parse(data));
    fs.readFile('./client/index.html', 'utf8', (err, data) => {
      if (err) throw err;
      res.status(201).send(data + '</br>' + csvReport);
    })
  })


  // // Uses node's File System to write to server
  // fs.writeFile('./xfile_picker.json', file, (err) => {
  //   if (err) throw err;
  //   console.log('File has been saved.');
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

// Text area POST method
// app.post('/text_area_upload_json', (req, res) => {
//   // Parse data and run function to convert data
//   const csvReport = funcs.convertToCSV(JSON.parse(req.body.textAreaData));
//   // Read html file and add converted JSON data
//   fs.readFile('./client/index.html', 'utf8', (err, html) => {
//     if (err) throw err;
//     res.status(201).send(html + '</br>' + csvReport);
//   })
// });