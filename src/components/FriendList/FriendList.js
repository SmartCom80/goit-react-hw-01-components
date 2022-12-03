import FriendListItem from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';
import { ItemList } from './FriendList.styled';

export default function FriendList({ friends }) {
   return (
      <ItemList>
         {friends.map(friend => (
            <FriendListItem key={friend.id} friend={friend} />
         ))}
      </ItemList>
   );
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired }),
   ),
};
