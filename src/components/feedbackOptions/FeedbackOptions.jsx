import { List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <List>
      <li>
        <button className="good" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li>
        <button className="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button className="bad" type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </List>
  );
};
