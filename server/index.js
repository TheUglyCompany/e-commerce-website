const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = 8080;
app.listen(PORT);
console.log(path.join(__dirname, '../client/dist'));
console.log(`Listening at http://localhost:${PORT}`);
