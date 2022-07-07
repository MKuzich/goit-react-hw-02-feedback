import styles from './Feedback.module.css';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  //   handleIncrease = props => {
  //     const name = props.value;
  //     this.setState(prevState => ({
  //       name: prevState.name + 1,
  //     }));
  //   };

  //   handleGoodIncrease = props => {
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   };

  //   handleNeutralIncrease = () => {
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   };

  //   handleBadIncrease = () => {
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   };

  render() {
    const { good, neutral, bad, total, positive } = this.state;

    return (
      <section className={styles.section}>
        <h2 className={styles.header}>Please, give us feedback</h2>
        <div className="">
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value={good}
          >
            Good
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value={neutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value={bad}
          >
            Bad
          </button>
        </div>
        <h2 className={styles.header}>Statistics</h2>
        <div className={styles.wrapper}>
          <p className={styles.item}>
            Good:
            <span className={styles.good}>{good}</span>
          </p>
          <p className={styles.item}>
            Neutral:
            <span className={styles.neutral}>{neutral}</span>
          </p>
          <p className={styles.item}>
            Bad:
            <span className={styles.bad}>{bad}</span>
          </p>
          <p className={styles.item}>
            Total:
            <span>{total}</span>
          </p>
          <p className={styles.item}>
            Positive:
            <span>{positive}%</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Feedback;
