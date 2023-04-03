import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.feedbackWrapper}>
      {options.map(option => (
        <button type="button" key={option.id} id={option.id} onClick={onLeaveFeedback}>
          {option.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onLeaveFeedback: PropTypes.func
};
