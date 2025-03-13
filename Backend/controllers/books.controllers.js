import { Book } from "../models/books.models.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";

//Controller to add a new book
export const addBook = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
            msg: 'Send all the required fields: title, author, publishYear!'
        });
    }

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
});

//Controller to get all books
export const getBooks = asyncHandler(async (req, res) => {
	const books = await Book.find({});
	return res.status(200).json({
		count: books.length,
		data: books
	})
});

//Controller to get a book
export const getBook = asyncHandler(async (req, res) => {
	const {id} = req.params;
	// console.log(req.params)
	const book = await Book.findById(id);
	return res.status(200).json(book)
});

//Controller to update a book
export const updateBook = asyncHandler(async (req, res) => {
	if(!req.body.author || !req.body.author || !req.body.publishYear){
		return res.status(400).send({msg: 'Send all the required fields: title, author, publishYear!'});
	}

	const {id} = req.params;
	const result = await Book.findByIdAndUpdate(id, req.body);

	if (!result) return res.status(404).send({msg: "Book not found!"});

	return res.status(200).send({msg: "Book updated Successfully!"})
})

//Controller to delete a book
export const deleteBook = asyncHandler(async (req, res) => {
	const {id} = req.params;

	const result = await Book.findByIdAndDelete(id);

	if (!result) return res.status(404).send({msg: "Book not found!"});

	return res.status(200).send({msg: "Book Deleted Successfully!"});
})