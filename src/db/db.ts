import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({path: './config/config.env'});

const MONGO_URI = process.env.MONGODB_URI


export const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log(`**** connected to mongodb successfully`.blue.bold);
  } catch (error: any) {
    console.error(`failed to connect to mongoDB ${error.message}`);
  }
};
