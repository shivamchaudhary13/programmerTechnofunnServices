import jobOpeningService from "../services/jobOpening.service.js"
import dataLists from "../utils/dataLists.js";

const createJobOpening = async(req,res) => {
    const result = await jobOpeningService.createJobOpening(req);
    res.send(result);
}

const getJobOpening = async(req,res) => {
    const result = await jobOpeningService.getJobOpening();
    res.send(result);
}

const getjobs = async(req,res) => {
    const result = await jobOpeningService.getjobs(req);
    res.send(result);
}

const updateJobOpening = async(req,res) =>{
    const result = await jobOpeningService.updateJobOpening(req);
    res.send(result);
}

const deleteJobOpening = async(req,res) => {
    const result = await jobOpeningService.deleteJobOpening(req);
    res.send(result);
}

const getJobOpeningData = async(req,res) => {    
    const result = {dataLists}
    res.send(result);
}

const jobApply = async(req,res) => {
    const result = await jobOpeningService.jobApply(req);
    res.send(result);
}
const saveJob = async(req,res) => {
    const result = await jobOpeningService.saveJob(req);
    res.send(result);
}

const removeJob = async(req,res) => {
    const result = await jobOpeningService.removeJob(req);
    res.send(result);
}

export default {createJobOpening,getJobOpening,getjobs,updateJobOpening,deleteJobOpening,getJobOpeningData,jobApply,saveJob,removeJob}