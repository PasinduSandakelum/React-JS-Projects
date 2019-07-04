import React, { Component } from 'react'
import '../../App.css';
export class TodoItem extends Component {
    render() {
        return (
            <div className="border">
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

export default TodoItem
