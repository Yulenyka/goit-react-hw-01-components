import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
  return (
      <table className={css.transactionHistory}>
  <thead className={css.transactionCaption}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transactionItem}>
                  {items.map(item => (
                       <tr className={css.transactionLine} key={item.id}>
                          <td>{item.type}</td>
                          <td>{item.amount}</td>
                          <td>{item.currency}</td>
                       </tr>
                  ))}
  </tbody>
</table>
);
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
};
