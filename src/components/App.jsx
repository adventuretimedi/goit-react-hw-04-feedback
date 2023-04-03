// import { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // methods

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  // самий основний, базовий.
  // E:this.setState(prevState) --> setGood(Good)

  const onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Unknown id');
        break;
    }
  };

  // markup
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            { id: 'good', name: 'Good' },
            { id: 'neutral', name: 'Neutral' },
            { id: 'bad', name: 'Bad' },
          ]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
