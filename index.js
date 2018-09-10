'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({hello: 'motto'});
});

// Export the Express application as the handler
module.exports.api = serverless(app);
