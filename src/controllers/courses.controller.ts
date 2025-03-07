import { Request, Response, NextFunction } from "express";
import Courses from "../models/Courses.model";
import asyncHandler from "../middlewares/asyncHandler";


// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
export const getCourses = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const courses = await Courses.find({}).populate("bootcamp");
    console.log(courses)
    res.status(200).json({ success: true, data: courses });
  }
);
  
// @desc    Get single course
// @route   GET /api/v1/courses/:id
// @access  Public
export const getCourse = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
    const course = await Courses.findById({ _id: req.params.id });
    console.log(course);
    res.status(200).json({ success: true, data: course });
  
});

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private
export const createCourse = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
    const  course = await Courses.create(req.body);
    console.log(course);

    res.status(201).json({ success: true, data: course });
  
});

// @desc    Update a course
// @route   GET /api/v1/courses/:id
// @access  Private
export const updateCourse = asyncHandler(async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    
      const course = await Courses.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      console.log(course);
      res.status(200).json({ success: true, data: course });
    
  }); 

// @desc    Delete a course
// @route   GET /api/v1/courses/:id
// @access  Private
export const deleteCourse = asyncHandler( async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    
      const deleteCourse = await Courses.findByIdAndDelete(id);
  
      console.log(deleteCourse);
  
      res.status(200).json({ success: true, msg: deleteCourse });
    
  });
