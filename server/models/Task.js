const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    deadline:{
        type: Number,
        required: true
    }
});

module.exports = model('Tasks', TaskSchema);