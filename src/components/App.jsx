import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";

import profileData from "../user.json";
import statisticsData from "../data.json";


export const App = () => {
  return <div>
    <Profile data={profileData} />
    <Statistics data={statisticsData}/>
    <GlobalStyle/>
  </div>
};