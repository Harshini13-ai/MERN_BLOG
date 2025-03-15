// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mern_blog')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Add a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Routes for posts
const postsRoute = require('./routes/posts');
app.use('/api/posts', postsRoute);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
