import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost/task");
        console.log("Success connection");
    } catch (error) {
        console.log(error);
    }
};
