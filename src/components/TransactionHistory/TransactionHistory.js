import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';
import AnyTransaction from './AnyTransaction';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.anyTransaction}>
        {items.map(item => (
          <AnyTransaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
