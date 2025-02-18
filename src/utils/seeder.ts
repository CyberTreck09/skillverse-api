require("dotenv").config({path: './config/config.env'});

import path from "path";
import { connectDB } from "../db/db";
import Bootcamp from "../models/Bootcamp.model";
import Courses from "../models/Courses.model";
import fs from "fs";
const colors = require('colors')
// import mongoose from "mongoose";




const BootcampsPath = path.join(__dirname, "../../_data/bootcamps.json");
const CoursesPath = path.join(__dirname, "../../_data/courses.json")

const BootcampsData = JSON.parse(fs.readFileSync(BootcampsPath, "utf-8"));
const CoursesData = JSON.parse(fs.readFileSync(CoursesPath, "utf-8"))


const importData = async (): Promise<void> => {
    try {
      await Bootcamp.create(BootcampsData);
      await Courses.create(CoursesData);
  
      console.log("Data Import Success".bgGreen.bold);
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };

  const deleteData = async (): Promise<void> => {
    try {

       
      await Bootcamp.deleteMany({});
      await Courses.deleteMany({});
  
    //   await Bootcamp.create(BootcampsData);
  
      console.log("Data deleted Successfully".bgRed.bold);
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };
  
  const runSeeder = async () => {
    await connectDB();
    if (process.argv[2] === "--import") {
      await importData();
    } else if (process.argv[2] === "--delete") {
      await deleteData();
    } else {
      console.log(`Invalid Command! Use ${"--import".bgGreen.bold} or ${"--delete".bgRed.bold}.`);
      process.exit();
    }
  };
  
  runSeeder();