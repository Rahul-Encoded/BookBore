import { Router } from "express";
import { addBook } from "../controllers/books.controllers.js";

const router = Router();

router.route("/addbook").post(addBook);

export default router;