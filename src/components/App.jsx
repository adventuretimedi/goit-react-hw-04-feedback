import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

class App extends Component {
  constructor() {
    super();

    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  onLeaveFeedback(e) {
    switch (e.target.id) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        console.log('Unknown id');
        break;
    }
  }

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={[
              { id: 'good', name: 'Good' },
              { id: 'neutral', name: 'Neutral' },
              { id: 'bad', name: 'Bad' },
            ]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
