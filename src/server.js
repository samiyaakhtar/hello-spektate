'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const PATH = '/hello-spektate/v1';

// App
const app = express();
app.get(PATH, (req, res) => {
  const ringHeader = req.header('x-ring');

  res.send(`Hello from the ${ringHeader} ring. These are beautiful rings for spektate.`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
