import candidateService from '../services/candidate.service.js';

const inviteCandidate = async(req,res) => {
    const result = await candidateService.candidateInvite(req.body);
    res.send(result);
}

const updateCandidateDetails = async(req,res) => {
    const result = await candidateService.updateCandidateDetails(req);
    res.send(result);
}

const jobOpeningInvite = async(req,res) => {
    const result = await candidateService.jobOpeningInvite(req.body);
    res.send(result)
}

const getAllCandidate = async(req,res) => {
    const result = await candidateService.getAllCandidate();
    res.send(result);
}

export default {inviteCandidate,updateCandidateDetails,jobOpeningInvite,getAllCandidate}