import axios from 'axios';

const createTodo = async todo => {
	try {
		const response = await axios.post('/todos', todo);
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
}

const getTodos = async () => {
	try {
		const response = await axios.get('/todos');
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
}

const updateTodo = async (id, todo) => {
	try {
		const response = await axios.put(`/todos/${id}`, todo)
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
}

const removeTodo = async id => {
	try {
		const response = await axios.delete(`/todos/${id}`)
		return response.data;
	} catch (err) {
		throw new Error(err);
	}
}

const todoApi = { createTodo, getTodos, updateTodo, removeTodo }

export default todoApi;