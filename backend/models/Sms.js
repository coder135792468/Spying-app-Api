import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		msg: {
			type: String,
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	},
	{
		timestamp: true,
	}
);

const Sms = mongoose.model('Message', messageSchema);

export default Sms;
