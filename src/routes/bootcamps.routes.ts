import express from "express";
import {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcamps.controller";

const BootcampsRouter = express.Router();

BootcampsRouter.get("/", getBootcamps);

BootcampsRouter.get("/:id", getBootcamp);

BootcampsRouter.post("/", createBootcamp);

BootcampsRouter.put("/:id", updateBootcamp);

BootcampsRouter.delete("/:id", deleteBootcamp);

export default BootcampsRouter;
