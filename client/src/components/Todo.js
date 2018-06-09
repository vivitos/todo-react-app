import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>
				<input type="text" value={this.props.todo.label} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></input>
				<input type="checkbox" checked={this.props.todo.done} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></input>
				<a href="" onClick={(event) => { this.props.deleteTodo(event, this.props.index) }}>Delete</a>
			</li>
		)
	}
}

export default Todo;