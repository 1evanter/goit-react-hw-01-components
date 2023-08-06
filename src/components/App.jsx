import { Profile } from "./Profile/Profile";
import profileData from "../user.json"
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return <div>
    <Profile data={profileData} />
    <GlobalStyle/>
  </div>
};