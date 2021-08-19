// import statData from './statistical-data.json';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function StatisticalList({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}
StatisticalList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticalList;
