module.exports = `
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mockController = require('./mockController');

app.get(
  '/mock-endpoint',
  mockController.mockGetEndpoint
);

app.post(
  '/mock-endpoint',
  mockController.mockPostEndpoint
);

app.listen(port, () => console.log('Example app listening on port: ' + port + '!'));
`
