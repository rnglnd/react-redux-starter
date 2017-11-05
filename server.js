const path = require('path');
const express = require('express');

const app = express();
const publicPath = `${__dirname}/public/`;
const mockDataPath = `${__dirname}/mock_data/`;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  if (request.url.indexOf('api/') !== -1) {
    return response.sendFile(`${mockDataPath + request.url}.json`);
  }

  return response.sendFile(path.resolve(publicPath, 'index.html'));
});

app.post('*', (request, response) => {
  if (request.url.indexOf('api/1/') !== -1) {
    return response.sendFile(`${mockDataPath + request.url}.json`);
  }

  return response.sendFile(path.resolve(publicPath, 'index.html'));
});

app.put('*', (request, response) => {
  if (request.url.indexOf('api/1/') !== -1) {
    return response.sendFile(`${mockDataPath + request.url}.json`);
  }

  return response.sendFile(path.resolve(publicPath, 'index.html'));
});

app.delete('*', (request, response) => {
  if (request.url.indexOf('api/1/') !== -1) {
    return response.sendFile(`${mockDataPath + request.url}.json`);
  }

  return response.sendFile(path.resolve(publicPath, 'index.html'));
});

const server = app.listen(8089, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Application Running on http://%s:%s', host, port);
});

