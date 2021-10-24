import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		msg: {
			type: String,
			required: true,
		},
	},
	{
		timestamp: true,
	}
);

const Sms = mongoose.model('Message', messageSchema);

export default Sms;
