const path = require('path');
const express = require('express');

const app = express();

const indexPath = path.join(__dirname, 'public', 'index.html');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => res.sendFile(indexPath));

app.listen(3000, () => console.log('App is listening on port 3000'));