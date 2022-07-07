import {
  StatsCard,
  Title,
  Stats,
  StatsItem,
  Label,
  Value,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsCard>
      {title && <Title>{title}</Title>}
      <Stats>
        {stats.map(item => (
          <StatsItem
            key={item.id}
            quantity={stats.length}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{item.label}</Label>
            <Value>{item.percentage}%</Value>
          </StatsItem>
        ))}
      </Stats>
    </StatsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
