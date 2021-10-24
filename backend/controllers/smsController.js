import asyncHandler from 'express-async-handler';
import Sms from '../models/Sms.js';

//@desc Save Message
//@route POST /api/message/add
//@acess public
const addMessage = asyncHandler(async (req, res) => {
	try {
		const { message } = req.body;
		const newMsg = new Sms();
		newMsg.msg = message;
		newMsg.userId = req.user._id;
		await newMsg.save();
		res.json({
			msg: 'Done',
		});
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Get all Messages
//@route GET /api/message/all
//@acess private & admin;
const getAllMessages = asyncHandler(async (req, res) => {
	try {
		const allMessages = await Sms.find({});
		res.json(allMessages);
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Delete Message BY ID
//@route GET /api/message/:id
//@acess private & admin;
const deleteMessage = asyncHandler(async (req, res) => {
	try {
		const sms = await Sms.findById(req.params.id);
		await sms.remove();
		res.json({
			msg: 'Deleted',
		});
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

export { addMessage, getAllMessages, deleteMessage };
