import express from "express";
const router = express.Router();
import onlineTestController from "../controllers/onlineTest.controller.js";

router.route("/")
  .post(onlineTestController.onlineTest)
  .get(onlineTestController.getOnlineTestData)
  .delete(onlineTestController.deleteQuestion)


router.route("/:course/:level").get(onlineTestController.getOnlineTests)
export default router;
