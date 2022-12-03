import { GlobalStyle } from 'components/GlobalStyle';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import Profile from './components/Profile/Profile';

import Statistic from './components/Statistic/Statistic';
import StatisticList from './components/Statistic/StatisticList';

import FriendList from './components/FriendList/FriendList';

import TransactionsHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
   return (
      <>
         <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
         />

         <Statistic title="Upload stats" stats={data}>
            <StatisticList stats={data} />
         </Statistic>

         <FriendList friends={friends} />

         <TransactionsHistory items={transactions} />
         <GlobalStyle />
      </>
   );
};
