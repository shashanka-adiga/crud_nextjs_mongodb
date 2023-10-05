import mongoose from "mongoose";


export default async function connectToMongoDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("db failed")
    }
}