import React, { Component } from 'react';

export default class EvilDeedCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <h3>Evil Deeds Committed Today</h3>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.updateCount()}>+1</button>
      </div>
    )
  }
}
