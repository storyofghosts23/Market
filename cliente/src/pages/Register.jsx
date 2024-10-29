import { useForm } from "react-hook-form";
import {regi} from "../axios/axios.js";
import { useAuth } from "../context/AuthContext.jsx";
export const Register = () => {

  const { register, handleSubmit } = useForm();

  const {signup} = useAuth();

  const onSubmit = async (data) => {

    signup(data)

  }

  return (
    <>
    <div style={{marginBottom: "10px", display: "flex", textAlign: "center", justifyContent: "center"}}>Register</div>
    
    <form action="" onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

      <label>Username</label>
      <input type="text" name="username" id="username" {...register("username")} />
      <label>Email</label>
      <input type="email" name="email" id="email" {...register("email")} />
      <label>Password</label>
      <input type="password" name="password" id="password" {...register("password")}/>

      <button type="submit">Register</button>

    </form>

    </>
  )
}
