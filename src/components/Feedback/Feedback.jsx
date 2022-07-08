import styles from './Feedback.module.css';
import React, { Component } from 'react';

class Feedback extends Component {
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

  countTotalFeedback = () => {
    const estimates = Object.values(this.state);

    return estimates.reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = value => {
    return this.countTotalFeedback()
      ? Math.floor((value / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalEstimates = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good);

    return (
      <section className={styles.section}>
        <h2 className={styles.header}>Please, give us feedback</h2>
        <div className="">
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value="good"
          >
            Good
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value="neutral"
          >
            Neutral
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleIncrease}
            value="bad"
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
            <span>{totalEstimates}</span>
          </p>
          <p className={styles.item}>
            Positive:
            <span>{positivePercentage}%</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Feedback;
