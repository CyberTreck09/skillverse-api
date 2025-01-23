import express from "express";
// import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import BootcampsRouter from "./routes/bootcamps.routes";
import morgan from 'morgan';
import { connectDB } from "./db/db";


dotenv.config({ path: "./config/config.env" });

connectDB();


const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use('/api/v1/bootcamps', BootcampsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}); 
