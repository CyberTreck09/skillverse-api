import { Request, Response, NextFunction } from "express";
import Bootcamp from "../models/Bootcamp.model";

export const getBootcamps = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, msg: "show all bootcamps" });
}

export const getBootcamp = (req: Request, res: Response, next: NextFunction) => {
    res
    .status(200)
    .json({ success: true, msg: `show a bootcamp ${req.params.id}` });
}

export const createBootcamp = async (req: Request, res: Response, next: NextFunction) => {

    const   bootcamp = await Bootcamp.create(req.body);
    console.log(bootcamp)

    res.status(201).json({ success: true, data: bootcamp });

}

export const updateBootcamp = (req: Request, res: Response, next: NextFunction) => {
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

export const deleteBootcamp = (req: Request, res: Response, next: NextFunction) => {
    res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}

