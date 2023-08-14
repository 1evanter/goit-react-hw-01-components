import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import profileData from "../user.json";
import statisticsData from "../data.json";
import friendsData from '../friends.json'
import transactionsData from '../transactions.json'

export const App = () => {
  return <div>
    <Profile user={profileData} />
    <Statistics stats={statisticsData} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactionsData} />
    <GlobalStyle/>
  </div>
};