import express from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.controller";

const CoursesRouter = express.Router();

CoursesRouter.get("/", getCourses);

CoursesRouter.get("/:id", getCourse);

CoursesRouter.post("/", createCourse);

CoursesRouter.put("/:id", updateCourse);

CoursesRouter.delete("/:id", deleteCourse);

export default CoursesRouter;