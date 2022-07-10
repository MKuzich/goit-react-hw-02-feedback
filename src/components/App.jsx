import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = e => {
    this.setState(prevState => ({
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };

  render() {
    return (
      <Feedback
        options={this.state}
        handleIncrease={this.handleIncrease}
      ></Feedback>
    );
  }
}
