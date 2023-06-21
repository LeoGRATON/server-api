const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routers/router');

const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});
//
app.use(cors ({origin: 'https://leo-graton.fr'}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API Portfolio Léo <br/> /works pour accéder aux réalisations <br/> /blog pour accéder aux articles');
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});