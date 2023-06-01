const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./book.routes');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/my-library', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Parse incoming JSON requests
app.use(express.json());

// Use book routes for book resource
app.use(bookRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});