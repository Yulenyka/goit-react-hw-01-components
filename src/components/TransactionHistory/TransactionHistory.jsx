import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
  return (
      <table className={css.transactionHistory}>
  <thead className={css.transactionСaption}>
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
