import express from "express";
// import { Request, Response, NextFunction } from "express";
const dotenv = require('dotenv');
import { errorHandler } from "./middlewares/error";
import BootcampsRouter from "./routes/bootcamps.routes";
import morgan from 'morgan';
const colors = require('colors')
// import colors from 'colors';
import { connectDB } from "./db/db";
import CoursesRouter from "./routes/courses.routes";


dotenv.config({ path: "./config/config.env" });

connectDB();


const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use('/api/v1/bootcamps', BootcampsRouter);
app.use('/api/v1/courses', CoursesRouter)

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`**** Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
}); 
