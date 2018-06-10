import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class Todo extends Component {
	render() {
		return (
			<li className="pt-2">
				<input type="checkbox" className="checkbox" checked={this.props.todo.done} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></input>
				<DebounceInput debounceTimeout={400} minLength={0} className="class-form mx-2" value={this.props.todo.label} onChange={(event) => this.props.onChange(event, this.props.index, this.props.todo)}></DebounceInput>
				<a href="" className="No-decoration" onClick={(event) => { this.props.deleteTodo(event, this.props.index) }}>X</a>
			</li>
		)
	}
}

export default Todo;