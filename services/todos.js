const mongoose = require('mongoose');
const TodosModel = require('../models/todos');
var createError = require('http-errors');

mongoose.connect('mongodb://127.0.0.1/test');

exports.listTodos = (next) => {
    TodosModel.find({}, (err, todos) => {
        if (err) return next(err);
        return next(null, todos);
    })
}

exports.addTodo = async (todo) => {
    const doc = await TodosModel.create(todo);
    if (!doc) {
        throw new createError(404, 'document-not-created');
    }
    return doc
}

exports.updateTodo =  async (id, update) => {
    const doc = await TodosModel.findByIdAndUpdate(id, update, { new: true });
    if (!doc) {
        throw new createError(404, 'document-not-found');
    }
    return doc
}

exports.deleteTodo = async (id, next) => {
    const deleted = await TodosModel.deleteOne({_id: id}).exec();
    if (!deleted || !deleted.n) {
        throw new createError(404, 'document-not-deleted');
    }
    return deleted;
}