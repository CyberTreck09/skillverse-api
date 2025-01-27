import { Request, Response, NextFunction } from "express";
import Bootcamp from "../models/Bootcamp.model";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
export const getBootcamps = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const bootcamps = await Bootcamp.find({})
        res.status(200).json({ success: true, data: bootcamps });
    } catch (error) {
        res.status(400).json({success: false})
    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const bootamp = await Bootcamp.findById({_id: req.params.id})
        console.log(bootamp)
        res
        .status(200)
        .json({ success: true, data: bootamp });
        
    } catch (error) {
        // res.status(400).json({success: false})
        next(error);
    }
}

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const   bootcamp = await Bootcamp.create(req.body);
        console.log(bootcamp);
    
        res.status(201).json({ success: true, data: bootcamp });
        
    } catch (error) {
        res.status(400).json({succes: false})
    }

};

// @desc    Update a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        
        const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body, {new: true})
        console.log(bootcamp);
        res 
        .status(200)
        .json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({json: false})
    }
}

// @desc    Delete a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const deleteBootcamp = await Bootcamp.findByIdAndDelete(id);

        console.log(deleteBootcamp);

        res
        .status(200)
        .json({ success: true, msg: deleteBootcamp });
        
    } catch (error) {
        res.status(400).json({success: false})
    }
}

