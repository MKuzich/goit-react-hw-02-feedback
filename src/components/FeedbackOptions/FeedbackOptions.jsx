import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={styles.list}>
        {Object.entries(options).map(item => {
          const name = item[0].charAt(0).toUpperCase() + item[0].slice(1);
          return (
            <li className={styles.item} key={item[0]}>
              <button
                type="button"
                className={styles.btn}
                onClick={onLeaveFeedback}
                value={item[0]}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
