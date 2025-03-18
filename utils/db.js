import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDb sucessfully! ");
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDb: ${error}`);
    })
};

export default db;