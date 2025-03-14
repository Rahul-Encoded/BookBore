import express from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());

//Option 2: Allow custom origins
app.use(cors({
	origin: "http://localhost:5173",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type"]
}))

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