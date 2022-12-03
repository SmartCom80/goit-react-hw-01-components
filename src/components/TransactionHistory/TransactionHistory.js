import PropTypes from 'prop-types';
import {
   Table,
   TableHead,
   TableCell,
   TableRow,
} from './TransactionHistory.styled';

export default function TransactionsHistory({ items }) {
   return (
      <Table>
         <TableHead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </TableHead>

         <tbody>
            {items.map(({ id, type, amount, currency }) => (
               <TableRow key={id} type={type}>
                  <TableCell type={type}>{type} </TableCell>
                  <TableCell>{amount} </TableCell>
                  <TableCell>{currency}</TableCell>
               </TableRow>
            ))}
         </tbody>
      </Table>
   );
}

TransactionsHistory.propTypes = {
   stats: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
      }),
   ),
};
