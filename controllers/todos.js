import { list, add, update, del } from '../services/todos';
import todosMapper from '../mapper/todos';
import todoMapper from '../mapper/todo';

const listTodos = (req, res, next) => {
    list((err, response) => {
        if (err) return next(err);
        res.json(todosMapper(response));
    });
}

const addTodo = async (req, res, next) => {
    const { label, done } = req.body;

    try {
        const todo = await add({ label, done });
        res.json(todoMapper(todo));
    } catch (err) {
        return next(err);
    }
}

const updateTodo = async (req, res, next) => {
    const id = req.params.id;
    const { label, done } = req.body;

    try {
        const todo = await update(id, { label, done });
        res.json(todoMapper(todo));
    } catch (err) {
        return next(err);
    }
}

const deleteTodo = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deleted = await del(id);
        res.json(deleted);
    } catch (err) {
        return next(err);
    }
}

export { listTodos, addTodo, updateTodo, deleteTodo };
