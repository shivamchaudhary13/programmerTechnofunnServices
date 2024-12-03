import express from 'express';
import authController from '../controllers/auth.controller.js';
const router = express.Router();

router.route('/login').post(authController.login);
router.route('/reset-password').patch(authController.changePassword)

export default router;