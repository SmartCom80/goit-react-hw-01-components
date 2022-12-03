import styled from 'styled-components';

export const Profile = styled.div`
   display: inline-block;
   text-align: center;
   width: 340px;
   margin-top: 40px;
   margin-left: calc(50% - 180px);
   padding: 40px 20px;
   background-color: rgba(239, 239, 239, 0.809);
   color: black;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
   border-radius: 8px;
`;

export const Description = styled.article`
   display: inline-flex;
   flex-direction: column;
   gap: 10px;
   align-items: center;
   justify-content: center;
`;

export const UserAvatar = styled.img`
   display: block;

   width: 150px;
   height: 150px;
   margin-bottom: 40px;

   border-radius: 50%;
   box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const UserName = styled.p`
   font-size: 24px;
   font-weight: 700;
   line-height: 1.4;
`;

export const UserTag = styled.p`
   color: rgb(71, 71, 71);
   font-size: 18px;
   line-height: 1.16;
`;

export const UserLocation = styled.p`
   color: rgb(71, 71, 71);
   font-size: 18px;
   line-height: 1.16;
`;

export const UserStat = styled.ul`
   display: flex;
   margin-top: 40px;
   padding: 5px;
   align-items: center;
   justify-content: space-around;
   list-style: none;

   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StatLabel = styled.span`
   position: relative;
   display: block;
   margin-bottom: 10px;
   color: rgb(71, 71, 71);
   font-size: 18px;
   line-height: 1.4;
`;

export const StatQuantity = styled.span`
   display: block;
   font-weight: 700;
   line-height: 1.4;
`;
