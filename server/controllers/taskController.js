const Task = require('../models/Task');

exports.getTask = (req, res, next) => {
    const {id} = req.params;

    Task.findById(id)
        .then(task => {
            if(!task) throw new Error();
            res.send(task);
        })
        .catch(err => {
            res.status(400).send();
        });
};

exports.getAllTasks = (req, res, next) => {
    Task.find()
        .then(tasks => {
            res.send(tasks);
        })
        .catch(err => {
            res.status(400).send([]);
        });
};

exports.postTask = (req, res, next) => {
    const {title, status, deadline} = req.body;

    const task = new Task({title, status, deadline});

    task.save()
        .then(result => {
            res.send('Task saved');
        })
        .catch(err => {
            res.send('err');    
        });
};

exports.putTask = (req, res, next) => {};

exports.deleteTask = (req, res, next) => {};