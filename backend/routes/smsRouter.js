import express from 'express';
import {
	addMessage,
	getAllMessages,
	deleteMessage,
} from '../controllers/smsController.js';
import { protect, admin } from '../middlewares/auth.js';

const router = express.Router();
router.route('/add').post(protect, addMessage);
router.route('/all').get(protect, admin, getAllMessages);
router.route('/delete/:id').delete(protect, admin, deleteMessage);

export default router;
