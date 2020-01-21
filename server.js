const express = require('express');
const items = require('./routes/api/items');

const app = express();

const PORT = 5000;

app.use('/api', items);

app.listen(PORT);