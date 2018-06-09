import React, { Component } from 'react';
import todoApi from '../api/todoApi';
import handleError from '../utils/handleError';
import Todo from './Todo';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			isLoading: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	fetchTodos() {
		this.setState({ isLoading: true });
		todos: todoApi.getTodos().then(res => {
			this.setState({
				todos: res,
				isLoading: false
			})
		}).catch(handleError)
	}

	addTodo() {
		this.setState({
			todos: [...this.state.todos, { label: '', done: false }]
		})
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
		if (this.state.isLoading) return (
			<span>
				Loading
			</span>
		)
		return (
			<ul className="list">
				{
					this.state.todos.map((todo, index) => {
						return (
							<Todo key={index} index={index} todo={todo} onChange={this.handleInputChange}></Todo>
						)
					})
				}
				<button onClick={this.addTodo}>New Todo</button>
			</ul>
		)
	}
}

export default List;