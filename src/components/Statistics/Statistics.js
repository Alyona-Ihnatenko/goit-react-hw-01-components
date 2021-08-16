import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import StatisticalList from './StatisticalList';
// import StatisticalData from './statistical-data.json';
export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <StatisticalList
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
