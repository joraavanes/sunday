const router = require('express').Router();
const {getTask, getAllTasks, postTask, putTask, deleteTask} = require('../controllers/taskController');

router.get('/:id', getTask);

router.get('/', getAllTasks);

router.post('/', postTask);

router.put('/:id', putTask);

router.delete('/:id', deleteTask);

module.exports = router;