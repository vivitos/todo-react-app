const express = require('express');
const validate = require('express-validation');
const todosValidation = require('../validation/todos');
const router = express.Router();
const todosController = require('../controllers/todos');

/* GET users listing. */
router.get('/todos', todosController.listTodos);
router.post('/todos', [validate(todosValidation.post), todosController.addTodo]);
router.put('/todos/:id', [validate(todosValidation.update), todosController.updateTodo]);
router.delete('/todos/:id', [validate(todosValidation.delete), todosController.deleteTodo]);

module.exports = router;
