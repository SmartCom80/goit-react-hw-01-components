import PropTypes from 'prop-types';

export default function StatList(props) {
  const { stats } = props;

  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label} </span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
