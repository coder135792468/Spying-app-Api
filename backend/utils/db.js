import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB connect: ${conn.connection.host}`.cyan.bold.underline);
	} catch (error) {
		console.log(`Error: ${error}`.red.bold.underline);
		process.exit(1);
	}
};

export default connectDB;
