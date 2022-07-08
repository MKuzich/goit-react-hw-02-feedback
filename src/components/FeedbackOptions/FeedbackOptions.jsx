import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <h2 className={styles.header}>Please, give us feedback</h2>
    <div className="">
      <button
        type="button"
        className={styles.btn}
        onClick={onLeaveFeedback}
        value={Object.keys(options)[0]}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={onLeaveFeedback}
        value={Object.keys(options)[1]}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={onLeaveFeedback}
        value={Object.keys(options)[2]}
      >
        Bad
      </button>
    </div>
  </>
);

export default FeedbackOptions;
