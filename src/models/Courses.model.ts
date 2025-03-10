import mongoose, { Schema } from "mongoose";
import { CoursesType } from "../interface/courses.interface";



const CoursesSchema = new mongoose.Schema<CoursesType>({
  title: String,
  description: String,
  weeks: Number,
  tuition: Number,
  minimumSkill: String,
  scholarhipsAvailable: Boolean,
  bootcamp: { type: mongoose.Schema.Types.ObjectId, ref: "Bootcamp", required: true }
});



const Courses = mongoose.model<CoursesType>('Courses', CoursesSchema);

export default Courses