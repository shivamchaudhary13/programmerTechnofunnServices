import resumeService from "../services/resume.service.js";

const uploadResume = async(req,res) => {
    let result = await resumeService.uploadResume(req);
    res.send(result);
}

export default {uploadResume}