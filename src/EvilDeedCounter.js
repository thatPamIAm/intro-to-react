import React, { Component } from 'react';

export default class EvilDeedCounter extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Evil Deeds Committed Today</h3>
        <h2>0</h2>
        <button>+1</button>
      </div>
    )
  }
}
