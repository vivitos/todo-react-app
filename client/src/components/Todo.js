import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<li className="pt-2">
				<input type="checkbox" className="checkbox" checked={this.props.todo.done} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></input>
				<input className="class-form mx-2" type="text" value={this.props.todo.label} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></input>
				<a href="" className="No-decoration" onClick={(event) => { this.props.deleteTodo(event, this.props.index) }}>X</a>
			</li>
		)
	}
}

export default Todo;