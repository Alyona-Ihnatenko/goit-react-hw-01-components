import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import StatisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={StatisticalData} />
      <Statistics stats={StatisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
