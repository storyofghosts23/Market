import express from "express";
import AuthRoutes from "./Router/router.routes.js";
import cors from "cors";

import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api",AuthRoutes);


export default app