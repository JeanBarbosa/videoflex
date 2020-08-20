const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({msg: 'hello world'});
});


app.listen(3333);