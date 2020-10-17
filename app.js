const express = require('express');
const app = express();
const morgan = require('morgan');

// Log request before processing them
app.use(morgan('dev'));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const transactionRoutes = require('./routes/api/transaction');
app.use('/transaction',transactionRoutes);

module.exports = app;