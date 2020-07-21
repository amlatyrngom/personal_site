const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.get('/static/media/MasterThesis.pdf', function (req, res) {
  var data = fs.readFileSync('./public/MasterThesis.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

app.get('/asset', function (req, res) {
  var data = fs.readFileSync('./public/MasterThesis.pdf');
  res.contentType("application/pdf");
  res.send(data);
});



// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



app.listen(80);
