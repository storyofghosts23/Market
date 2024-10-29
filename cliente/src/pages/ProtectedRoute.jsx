import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"
export const ProtectedRoute = () => {

    const {isAuth, setIsAuth,user} = useAuth()
    if(!isAuth){
        return <Navigate to="/login" replace/>
    }
    setIsAuth(true)

  return (
    <Outlet />
  )
}
