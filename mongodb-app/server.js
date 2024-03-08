/** @format */
let dbConnect = require('./dbConnect');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// parse requests of content-type - application/json
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my MongoDB application.' });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// console.log('testing');
