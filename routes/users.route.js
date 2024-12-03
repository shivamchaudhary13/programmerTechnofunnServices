import express from 'express';
const router = express.Router();
import userController from '../controllers/users.controller.js';

router.route('/register').post(userController.Register)

router.route('/updateProfile').patch(userController.updateProfile)

router.route('/verifyOtp').post(userController.verifyOTP)

router.route('/').get(userController.getUsers);

router.route('/:userId').get(userController.getUsersById);

router.route('/delete').delete(userController.deleteUsers)

// router.route('/userData/:userId').get(userController.getUserData);

export default router;