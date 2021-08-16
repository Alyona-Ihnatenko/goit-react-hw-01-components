import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';
export default function AnyTransaction({ type, amount, currency }) {
  return (
    <tr className={css.transactionHistory}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
}

AnyTransaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
