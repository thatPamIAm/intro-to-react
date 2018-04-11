import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting.js';
import EvilDeedCounter from './EvilDeedCounter.js';
import EvilToDo from './EvilToDo.js';
import Login from './Login.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: ''
    };

    this.setUserName = this.setUserName.bind(this);
  }

  setUserName(name) {
    this.setState({ userName: name });
  }

  displayLogin() {
    return (
      <Login setUserName={this.setUserName} />
    )
  }

  displayApp() {
    return (
      <div>
        <h1>Evil Deeds</h1>
        <Greeting villainName={this.state.userName}
          compliment="Your hair looks great today" />
          <EvilDeedCounter />
          <EvilToDo />
      </div>
    )
  }

  render() {
    return (
      <div className = "App">
        {
          this.state.userName ?
          this.displayApp() :
          this.displayLogin()
        }
      </div>
    )
  }

}

export default App;
