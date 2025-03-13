import { Router } from "express";
import { addBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/books.controllers.js";

const router = Router();

//Route to add a new book
router.route("/").post(addBook);

//Route to fetch all books
router.route("/").get(getBooks);

//Route to fetch all books
router.route("/:id").get(getBook);

//Route to update a book
router.route("/:id").put(updateBook);

//Route to delete a book
router.route("/:id").delete(deleteBook);

export default router;