const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

global.log = console.log;

const app = express();

const indexPath = path.join(__dirname, 'public', 'index.html');

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/tasks', require('./routes/taskRoutes'));

app.use((req, res, next) => res.sendFile(indexPath));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true, poolSize: 100})
    .then(result => {
        app.listen(3000, () => log(chalk.bold.bgRgb(11, 153, 3)('App is running on http://localhost:3000')));
    })
    .catch(err => {
        console.log(err);
    });