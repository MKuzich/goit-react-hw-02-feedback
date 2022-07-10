import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
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

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
