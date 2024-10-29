import { apikey } from "../config.js";
import UserSchema from "../Models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const register = async (req, res) => {

    const { username, email, password } = req.body;
    const crypt = await bcrypt.hash(password, 10);
    const newUser = new UserSchema({ username, email, password: crypt });
    const creatoken = jwt.sign({ _id: newUser._id }, apikey,{"expiresIn":"5h"});
    res.cookie("token", creatoken);
    const save = await newUser.save();
    res.send({ 
        token: creatoken, 
        user: save 

    });

}

export const login = async (req, res) => {

    try {
    const { email, password } = req.body;
    const find = await UserSchema.findOne({ email });
    if (!find) {
        return res.status(404).send("User not found");
    }
    
    const pass = await bcrypt.compare(password, find.password);
   
    const creatoken = await jwt.sign({ _id: find._id }, apikey,{"expiresIn":"5h"});

   
    
    if (!pass) {
        return res.status(404).send(`Wrong password ${find.password}`);
    }else{
        res.cookie("token", creatoken);   
        res.send({ 
            token: creatoken, 
            user: find
    
        });
    }
} 
    catch (error) {
     console.log(error)   
    }
    
}


export const logout = (req, res) => {
    res.clearCookie("token");
    res.send("Logout");
}

export const profile = async(req, res) => {
    const pasale = await UserSchema.findById(req.user._id);
    res.send({
        user: pasale
    });
}


export const valid = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    jwt.verify(token, apikey, async (err, user) => {
        if (err) {
            return res.status(401).send("Unauthorized");
           
        }
            const usefound = await UserSchema.findById(user._id);

            return res.json({
                token,
                usefound}); 
    });

}