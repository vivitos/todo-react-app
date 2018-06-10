import mongoose from 'mongoose';
import TodosModel from '../models/todos';
import createError from 'http-errors';

mongoose.connect('mongodb://127.0.0.1/test');

const list = (next) => {
    TodosModel.find({}, (err, todos) => {
        if (err) return next(err);
        return next(null, todos);
    })
}

const add = async (todo) => {
    const doc = await TodosModel.create(todo);
    if (!doc) {
        throw new createError(404, 'document-not-created');
    }
    return doc
}

const update = async (id, update) => {
    const doc = await TodosModel.findByIdAndUpdate(id, update, { new: true });
    if (!doc) {
        throw new createError(404, 'document-not-found');
    }
    return doc
}

const del = async (id, next) => {
    const deleted = await TodosModel.deleteOne({ _id: id }).exec();
    if (!deleted || !deleted.n) {
        throw new createError(404, 'document-not-deleted');
    }
    return deleted;
}

export { list, add, update, del };