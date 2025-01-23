import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://hassanhydara09:evoWOyN3fsQZ7SUY@skill-versep-api.kijbs.mongodb.net/?retryWrites=true&w=majority&appName=Skill-Verse-API"

export const connectDB = async () => {
    if (!MONGO_URI) {
        throw new Error ("MONGO_URI environment variable is not defined")
    }

    try {
        await mongoose.connect(MONGO_URI);  
        console.log(`connected to mongodb successfully`)
     
    } catch(error: any) {
        console.error(`failed to connect to mongoDB ${error.message}`)
    }
}

