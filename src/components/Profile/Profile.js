import PropTypes from 'prop-types';
import {
   Description,
   Profile,
   UserAvatar,
   UserName,
   UserTag,
   UserLocation,
   UserStat,
   StatLabel,
   StatQuantity,
} from './Profile.styled';

export default function ProfileUser({
   username,
   tag,
   location,
   avatar,
   stats: { followers, views, likes },
}) {
   return (
      <Profile>
         <Description>
            <UserAvatar src={avatar} alt="User avatar" />
            <UserName>{username}</UserName>
            <UserTag>{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
         </Description>

         <UserStat>
            <li>
               <StatLabel>Followers </StatLabel>
               <StatQuantity>{followers}</StatQuantity>
            </li>
            <li>
               <StatLabel>Views </StatLabel>
               <StatQuantity>{views}</StatQuantity>
            </li>
            <li>
               <StatLabel>Likes </StatLabel>
               <StatQuantity>{likes}</StatQuantity>
            </li>
         </UserStat>
      </Profile>
   );
}

ProfileUser.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
   }).isRequired,
};
