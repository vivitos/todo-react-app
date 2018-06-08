const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Todos', new Schema({
    label: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
}));