const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const router = require('./router');

app.use(cors());
app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});