import styled from 'styled-components';

export const Item = styled.li`
   display: inline-flex;
   align-items: center;
   width: 340px;
   padding: 20px;
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 9px, rgba(0, 0, 0, 0.23) 0px 8px 6px;
`;

export const OnLineMarker = styled.span`
   display: block;
   width: 16px;
   height: 16px;
   margin-right: 40px;
   border-radius: 16px;

   background-color: ${props => {
      return props.marker ? 'green' : 'red';
   }};
`;

export const AvatarImg = styled.img`
   margin-right: 40px;
   display: block;
   width: 60px;
`;

export const UserName = styled.p`
   font-size: 24px;
   font-weight: 700;
`;
