import PropTypes from 'prop-types';
import { RandomColor } from './RandomColorFunc';
import { StatList, Item, Label, Percentage } from './StatisticList.styled';

export default function StatisticList({ stats }) {
   return (
      <StatList>
         {stats.map(({ id, label, percentage }) => (
            <Item key={id} color={RandomColor()}>
               <Label>{label} </Label>
               <Percentage>{percentage}%</Percentage>
            </Item>
         ))}
      </StatList>
   );
}

StatisticList.propTypes = {
   stats: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      }),
   ).isRequired,
};
