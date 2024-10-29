import jwt from "jsonwebtoken";
import { apikey } from "../config.js";


export const validatetoken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }       
    jwt.verify(token, apikey, (err, user) => {
        if (err) {
            return res.status(401).send("Unauthorized");
        }
        req.user = user;
    });
    next();
}