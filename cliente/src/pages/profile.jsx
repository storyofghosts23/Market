
import Navbaar from "../components/Navbar"
import { useAuth } from "../context/AuthContext"

export const Profile = () => {

  const {isAuth,user,setUser} = useAuth()

 
  return (
    <>
    <Navbaar/>
    <div>Profile</div>

    </>
  )
}
