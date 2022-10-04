import Profile from './components/Profile/Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Statistics from './components/Statistics/Statistics';
import StatList from './components/Statistics/StatList';
import FriendList from './components/FriendList/FriendList';
import TransactionsHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data}>
        <StatList stats={data} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionsHistory items={transactions} />
    </div>
  );
};
