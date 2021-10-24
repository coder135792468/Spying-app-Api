import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './utils/db.js';

import userRouter from './routes/userRoute.js';
import smsRouter from './routes/smsRouter.js';
import { notFound, errorHandler } from './middlewares/error.js';
dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		msgl: 'Welcome to this page',
		request: [
			{
				Login: '/api/user/login',
			},
			{
				Register: '/api/user/register',
			},
			{
				'Add new Message': '/api/message/add',
			},
			{
				'GEt all Message': '/api/message/all',
			},
			{
				'Delete a Message': '/api/message/delete/:Id',
			},
		],
	});
});

app.use('/api/user', userRouter);
app.use('/api/message', smsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(
	PORT,
	console.log(`Server is running on port on PORT:${PORT}`.yellow.bold.underline)
);
