import express from "express";
const router = express.Router();
import resumeController from '../controllers/resume.controller.js';
import customParserMiddleware from "../utils/customMiddleware.js";

router.route('/uploadResume').post(customParserMiddleware, resumeController.uploadResume)


export default router;