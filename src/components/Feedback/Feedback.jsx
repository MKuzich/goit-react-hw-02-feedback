import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  countTotalFeedback = () => {
    const estimates = Object.values(this.props.options);

    return estimates.reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = value => {
    return this.countTotalFeedback()
      ? Math.floor((value / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.props.options;
    const totalEstimates = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good);

    return (
      <>
        <Section title="Please, give us your feedback">
          <FeedbackOptions
            options={this.props.options}
            onLeaveFeedback={this.props.handleIncrease}
          />
        </Section>
        <Section title="Statistics">
          {totalEstimates > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalEstimates}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  handleIncrease: PropTypes.func.isRequired,
};
