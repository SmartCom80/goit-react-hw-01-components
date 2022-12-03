import {
   AvatarImg,
   Item,
   OnLineMarker,
   UserName,
} from 'components/FriendList/FriendListItem.styled';
import PropTypes from 'prop-types';

export default function FriendListItem({
   friend: { id, isOnline, avatar, name },
}) {
   return (
      <Item key={id}>
         <OnLineMarker marker={isOnline}>{isOnline}</OnLineMarker>
         <AvatarImg src={avatar} alt="User avatar" />
         <UserName>{name}</UserName>
      </Item>
   );
}

FriendListItem.propTypes = {
   friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
   }),
};
