import mongoose from "mongoose";

const conn = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost:27017/SEADCO");
        console.log("Database connected");


    } catch (error) {
        
    }
} 

export default conn