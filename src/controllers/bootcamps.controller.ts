import { Request, Response, NextFunction } from "express";
import Bootcamp from "../models/Bootcamp.model";
import asyncHandler from "../middlewares/asyncHandler";


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
export const getBootcamps = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const query: any = {};
    
    // sort by name   
    if(req.query.housing) {
      query.housing = req.query.housing
    }

    if(req.query.email) {
      query.role = req.query.email;
    }

    console.log(query)
    const bootcamps = await Bootcamp.find(query);
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  }
);

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    
    const bootamp = await Bootcamp.findById({ _id: req.params.id });
    console.log(bootamp);
    res.status(200).json({ success: true, data: bootamp });
  
});

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = asyncHandler(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
    const bootcamp = await Bootcamp.create(req.body);
    console.log(bootcamp);

    res.status(201).json({ success: true, data: bootcamp });
  
});

// @desc    Update a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp = asyncHandler(async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    
      const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      console.log(bootcamp);
      res.status(200).json({ success: true, data: bootcamp });
    
  }); 

// @desc    Delete a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp = asyncHandler( async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    
      const deleteBootcamp = await Bootcamp.findByIdAndDelete(id);
  
      console.log(deleteBootcamp);
  
      res.status(200).json({ success: true, msg: deleteBootcamp });
    
  });
