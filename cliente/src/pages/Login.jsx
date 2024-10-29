import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {


  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const {sigin,isAuth,setIsAuth,user} = useAuth();
  useEffect(() => {
    if(isAuth) {
     navigate("/profile")
    };
  }, [isAuth]);

const onSubmit = async (data) => {
  sigin(data)
  
};
  return (
    <>
    <div style={{marginBottom: "10px", display: "flex", textAlign: "center", justifyContent: "center"}}>Login</div>
    
    <form action="" onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

      <label>Email</label>
      <input type="email" name="email" id="email" {...register("email")} />
      <label>Password</label>
      <input type="password" name="password" id="password" {...register("password")}/>

      <button type="submit">Register</button>

    </form>
    </>
  )
}
