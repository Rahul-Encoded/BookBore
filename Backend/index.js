import express from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
	console.log(req);
	return res.status(234).send("Welcome to the BookBore");
});

app.post('/books', async (req, res) => {
	try {
		if(!request.body.title || !request.body.author || !request.body.publishYear){
			return response.status(400).send({
				message: `Send all the required fields: title, author, publishYear`
			});
		}
		const newBook = {
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear,
		}

	}
	catch(error){
		console.log(error.message);
		response.status.send({message: error.message})
	}
})

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