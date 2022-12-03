import styled from 'styled-components';

export const StatList = styled.ul`
   list-style: none;
   display: flex;
   padding: 0;
   border-radius: 8px;
   overflow: hidden;
   background-color: lightcoral;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 16px,
      rgba(0, 0, 0, 0.22) 0px 22px 12px;
`;

export const Item = styled.li`
   display: grid;
   gap: 16px;
   padding: 12px;
   height: 80px;
   min-width: 70px;
   justify-items: center;
   align-content: center;
   color: white;
   background-color: ${({ color }) => color};
`;

export const Label = styled.span`
   font-size: 24px;
   font-weight: 700;
`;

export const Percentage = styled.span`
   font-size: 20px;
   font-weight: 700;
`;
