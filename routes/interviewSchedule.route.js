import express from 'express';
const router = express.Router();
import interviewScheduleController from '../controllers/interviewSchedule.controller.js';

router.route('/').post(interviewScheduleController.createInterviewSchedule)


export default router;