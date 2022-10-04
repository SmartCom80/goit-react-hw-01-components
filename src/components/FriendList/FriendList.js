import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
