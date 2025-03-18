import express from "express";
import { carShowroom } from "../controller/car.controller.js";

const router = express.Router();

router.get("/car/", carShowroom);

export default router;