import { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import options from '../uitils/feedbackOptions.json';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log('Invalid');
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="main-div">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onClickFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onClickFeedback = name => {
//   this.setState(prevState => {
//     return {
//       [name]: prevState[name] + 1,
//     };
//   });
// };

// countTotalFeedback = () =>
//   this.state.good + this.state.neutral + this.state.bad;

// countPositiveFeedbackPercentage = () => {
//   return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

// return (
//   <div className="main-div">
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.onClickFeedback}
//       />
//     </Section>
//     <Section title="Statistics">
//       {total === 0 ? (
//         <Notification message="There is no feedback" />
//       ) : (
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       )}
//     </Section>
//   </div>
// );
//   }
// }
