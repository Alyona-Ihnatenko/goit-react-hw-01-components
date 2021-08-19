import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/jsonFiles/transactions.json';
import friends from './components/jsonFiles/friends.json';
import StatisticalData from './components/jsonFiles/statistical-data.json';
import user from './components/jsonFiles/user.json';

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
