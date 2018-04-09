import React, { Component } from 'react';

export default class EvilToDo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      toDos: ['not write tests']
    };
  }

  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  addToDo = () => {
    let newArray = [...this.state.toDos, this.state.inputValue];
    // newArray.push(this.state.inputValue);
    this.setState({ toDos: newArray, inputValue: '' });
  }

  render() {
    const toDoArray = this.state.toDos.map(todo => <li>{todo}</li>);

    return (
      <div>
        <h2>Evil To Do List</h2>
        <input
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        ></input>
        <button onClick={this.addToDo}>SUBMIT</button>
        <ul>
          { toDoArray }
        </ul>
      </div>
    )
  }
}
