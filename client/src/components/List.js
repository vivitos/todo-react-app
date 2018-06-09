import React, { Component } from 'react';
import todoApi from '../api/todoApi';
import handleError from '../utils/handleError';
import Todo from './Todo';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	async fetchTodos() {
		this.setState({
			todos: await todoApi.getTodos().catch(handleError)
		})
	}

	async addTodo(event) {
		await todoApi.createTodo({ label: '', done: false }).catch(handleError);
		this.fetchTodos();
	}

	async deleteTodo(event, index) {
		event.preventDefault();
		await todoApi.removeTodo(this.state.todos[index].id).catch(handleError);
		this.fetchTodos();
	}

	async handleInputChange(event, index, todo) {
		await todoApi.updateTodo(todo.id, {
			done: event.target.type === 'checkbox' ? event.target.checked : this.state.todos[index].done,
			label: event.target.type === 'text' ? event.target.value : this.state.todos[index].label
		}).catch(handleError);
		this.fetchTodos();
	}

	componentDidMount() {
		this.fetchTodos();
	}

	render() {
		return (
			<ul className="list">
				{
					this.state.todos.map((todo, index) => {
						return (
							<Todo key={index} index={index} todo={todo} onChange={this.handleInputChange} deleteTodo={this.deleteTodo}></Todo>
						)
					})
				}
				<button onClick={this.addTodo}>New Todo</button>
			</ul>
		)
	}
}

export default List;