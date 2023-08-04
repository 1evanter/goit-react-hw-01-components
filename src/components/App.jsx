import { Profile } from "./Profile/Profile";
import profileData from "../user.json"


export const App = () => {
  return <div>
    <Profile data={profileData} />
  </div>
};