import interviewScheduleService from "../services/interviewSchedule.service";

const createInterviewSchedule = async(req,res) => {
    await interviewScheduleService.createInterviewSchedule(req);
}

export default {createInterviewSchedule}