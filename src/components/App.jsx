import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

import profileData from "../user.json";
import statisticsData from "../data.json";
import friendsData from '../friends.json'

export const App = () => {
  return <div>
    <Profile data={profileData} />
    <Statistics data={statisticsData} />
    <FriendList friends={friendsData} />
    <GlobalStyle/>
  </div>
};