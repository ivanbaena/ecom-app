const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req);

  res.send('Hi There Ivan');
});

app.listen(3000, () => {
  console.log('server is running');
});
