import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      {options.map(item => (
        <li key={item.id}>
          <button
            className={item.name}
            type="button"
            onClick={() => onLeaveFeedback(item.name)}
          >
            {item.value}
          </button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
