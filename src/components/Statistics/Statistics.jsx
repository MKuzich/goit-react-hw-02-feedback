import React, { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
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
            <span>{positivePercentage}%</span>
          </p>
        </div>
      </>
    );
  }
}

export default Statistics;
