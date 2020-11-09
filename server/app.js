const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const {log} = console;

require('dotenv').config();

const app = express();

const indexPath = path.join(__dirname, 'public', 'index.html');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => res.sendFile(indexPath));

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, poolSize: 100})
    .then(result => {
        app.listen(3000, () => log(chalk.bold.bgRgb(11, 153, 3)('App is listening on http://localhost:3000')));
    })
    .catch(err => {
        console.log(err);
    });