import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>Good:{good} </li>
      <li>Neutral: {neutral}</li>
      <li>Bad:{bad} </li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {good === 0 && neutral === 0 && bad === 0
          ? (positivePercentage = 0)
          : positivePercentage}
        %
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
