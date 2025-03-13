import express from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	console.log(req);
	return res.status(234).send("Welcome to the BookBore");
});

import userRouter from "./routes/books.routes.js"
app.use("/api/v1/books", userRouter);

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("App connected to database.");
		app.listen(PORT, () => {
			console.log(`App is listening to port ${PORT}`);
		});
}).catch((error) => {
	console.log(error);
})