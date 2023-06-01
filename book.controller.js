const Book = require('./book.model');

// Retrieve all books
async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Retrieve a specific book by ID
async function getBookById(req, res) {
    res.json(res.book);
}

// Create a new book
async function createBook(req, res) {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        publishedYear: req.body.publishedYear
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Update a book by ID
async function updateBookById(req, res) {
    if (req.body.title != null) {
        res.book.title = req.body.title;
    }

    if (req.body.author != null) {
        res.book.author = req.body.author;
    }

    if (req.body.description != null) {
        res.book.description = req.body.description;
    }

    if (req.body.publishedYear != null) {
        res.book.publishedYear = req.body.publishedYear;
    }

    try {
        const updatedBook = await res.book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Delete a book by ID
async function deleteBookById(req, res) {
    try {
        await res.book.remove();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById
};