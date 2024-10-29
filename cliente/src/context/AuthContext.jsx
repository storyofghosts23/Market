import { createContext, useState, useContext, useEffect } from "react";
import { login, regi, valid } from "../axios/axios.js";
import Cookies from "js-cookie"

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

     const sigin = async(data) => {

        try {
            
            const res = await login(data);
            setUser(res.data.user)
            setIsAuth(true)
            console.log(user,isAuth)

        } catch (error) {
            console.log(error)
        }


        

    }

    const signup = async (data) => {

        try {

            const res = await regi(data);
            setUser(res.data.user)
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("user", res.data)
            console.log(user)
            
            setIsAuth(true)

            
        } catch (error) {
            console.log(error)
        }

    }

    

    useEffect(() => {
        async function validatelogin(){
            const toka = Cookies.get("token")
            if(toka){
                try {
                     const res = await valid(toka)
                    if(!res){
                        setIsAuth(false)
                        setUser(null)
                    }
                    if(res.data.token == toka){
                        setIsAuth(true)
                    setUser(res.data.usefound)
                    window.localStorage.setItem("token", JSON.stringify(res.data.usefound))
                    }
                    
                } catch (error) {
                    console.log(error)
                    setIsAuth(false)
                    setUser(null)
                }
               
            }
            
        }
        validatelogin()
    },)

        
    const logout = () => {

        Cookies.remove("token")
        setIsAuth(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuth,
            setIsAuth,
            signup,
            sigin


        }}>
            {children}
        </AuthContext.Provider>
    )
}

