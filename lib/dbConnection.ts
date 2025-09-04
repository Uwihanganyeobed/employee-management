import mongoose from "mongoose";

let cached: typeof mongoose | null =null;
export default async function connectDatabase() {

    if(cached) return cached;

    if(!process.env.MONGODB_URL){
        throw new Error("DB_URL not found")
    }
    cached = await mongoose.connect(process.env.MONGODB_URL)
    return cached
}