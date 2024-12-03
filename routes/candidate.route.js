import express from 'express';
const router = express.Router();
import candidateController from '../controllers/candidate.controller.js';

router.route('/inviteCandidate').post(candidateController.inviteCandidate);

router.route('/updateCandidateDetails').patch(candidateController.updateCandidateDetails)

router.route('/jobOpeningInvite').post(candidateController.jobOpeningInvite)

router.route('/kpi').get(candidateController.getAllCandidate)

export default router;