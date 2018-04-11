import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      logInValue: ''
    };
  }

  logInState = (event) => {
    this.setState({ logInValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Please Log In</h2>
        <input
          type='text'
          value={this.state.logInValue}
          onChange={this.logInState}
        ></input>
        <button onClick={() => this.props.setUserName(this.state.logInValue)}>SUBMIT</button>
      </div>
    )
  }
}

export default Login;
