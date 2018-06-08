const Todos = require('../services/todos')
const todosMapper = require('../mapper/todos')
const todoMapper = require('../mapper/todo')

exports.listTodos = (req, res, next) => {
    Todos.listTodos((err, response) => {
        if(err) return next(err);
        res.json(todosMapper(response));
    });
}

exports.addTodo = async (req, res, next) => {
    const { label, done } = req.body;

    try {
        const todo = await Todos.addTodo({ label, done });
        res.json(todoMapper(todo));
    } catch (err) {
        return next(err);
    }
}

exports.updateTodo = async (req, res, next) => {
    const id = req.params.id;
    const { label, done } = req.body;

    try {
        const todo = await Todos.updateTodo(id, { label, done });
        res.json(todoMapper(todo));
    } catch (err) {
        return next(err);
    }
}

exports.deleteTodo = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deleted = await Todos.deleteTodo(id);
        res.json(deleted);
    } catch (err) {
        return next(err);
    }
}
