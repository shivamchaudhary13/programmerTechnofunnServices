import express from "express";
const router = express.Router();
import jobOpeningController from "../controllers/jobOpening.controller.js";

router
  .route("/")
  .post(jobOpeningController.createJobOpening)
  .get(jobOpeningController.getJobOpening);
router.route("/dropdowns").get(jobOpeningController.getJobOpeningData);

router
  .route("/:jobOpeningId")
  .get(jobOpeningController.getjobs)
  .patch(jobOpeningController.updateJobOpening)
  .delete(jobOpeningController.deleteJobOpening);

  router.route("/jobapply/:jobOpeningId").patch(jobOpeningController.jobApply)
  router.route("/saveJob/:jobOpeningId").patch(jobOpeningController.saveJob)

  router.route("/removejob/:jobOpeningId").patch(jobOpeningController.removeJob);

export default router;
