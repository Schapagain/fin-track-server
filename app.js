const express = require('express');
const app = express();
const morgan = require('morgan');
const transactionRoutes = require('./routes/api/transactions');

// Log request before processing them
app.use(morgan('dev'));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions',transactionRoutes);

module.exports = app;