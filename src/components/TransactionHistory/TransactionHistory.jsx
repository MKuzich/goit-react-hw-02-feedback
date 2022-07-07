import {
  TransactionTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(el => (
          <TableRow key={el.id}>
            <TableData>{el.type}</TableData>
            <TableData>{el.amount}</TableData>
            <TableData>{el.currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
