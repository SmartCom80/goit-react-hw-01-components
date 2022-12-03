import styled from 'styled-components';

export const Table = styled.table`
   width: 720px;
   margin-top: 60px;
   margin-bottom: 60px;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   background-color: #f3f5f6;
   border-radius: 8px;
   border-collapse: collapse;
   overflow: hidden;
   font-size: 14px;
`;

export const TableHead = styled.thead`
   height: 40px;
   color: white;
   background-color: #00bcd5;
   text-transform: uppercase;
`;

export const TableRow = styled.tr`
   ${({ type }) => {
      switch (type) {
         case 'invoice':
            return `background-color: #cfe8fc;`;
         case 'payment':
            return `background-color: #e8faf3;`;
         case 'withdrawal':
            return `background-color: #e3ad9e;`;
         case 'deposit':
            return `background-color: #9af4c0;`;
         default:
            return `background-color: #f3f5f6`;
      }
   }}
`;

export const TableCell = styled.th`
   height: 40px;
   outline-style: auto;
   outline: 1px solid #ededed;
   ${({ type }) => {
      if (type) {
         return `text-transform: capitalize;
						text-align: left;
						text-indent: 43%;`;
      }
   }};
`;
