const express = require('express');
const app = express();

const portNo = 3000;

app.get('/', (req, res) => {
  res.send('Docker started!');
});

app.listen(portNo, () => {
  console.log('Now started on port: ' + portNo);
});
