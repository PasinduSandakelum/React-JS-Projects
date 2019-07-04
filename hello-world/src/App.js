import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Have a dinner",
        completed: false
      },
      {
        id: 2,
        title: "Have a lunch",
        completed: false
      },
      {
        id: 3,
        title: "Watch movie",
        completed: true
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );

  }
}

export default App;
