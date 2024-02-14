import { Navbar } from "../../components/user/Navbar"
import { Profile } from "../../components/user/Profile"
import '../../assets/css/user/Myevents.css' 
export const Myevents = () => {
  return (
    <div id="my-events">
        <Navbar></Navbar>
        <div className="profile-contents">
          <Profile></Profile>

        </div>
    </div>
  )
}
