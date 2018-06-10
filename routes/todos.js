import express from 'express';
import validate from 'express-validation';
import { post, update, del } from '../validation/todos';
import { listTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos';
const router = express.Router();

/* GET users listing. */
router.get('/todos', listTodos);
router.post('/todos', [validate(post), addTodo]);
router.put('/todos/:id', [validate(update), updateTodo]);
router.delete('/todos/:id', [validate(del), deleteTodo]);

export default router;
