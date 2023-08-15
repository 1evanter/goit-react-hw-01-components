import profileData from "../data/user.json";
import statisticsData from "../data/data.json";
import friendsData from '../data/friends.json'
import transactionsData from '../data/transactions.json'

import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return <div>
    <Profile user={profileData} />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactionsData} />
    <GlobalStyle/>
  </div>
};