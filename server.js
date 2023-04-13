const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static("build"));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
