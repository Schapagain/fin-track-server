const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable Cross Origin Sharing for everyone
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    // Handle initial OPTIONS request
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Serve API routes
app.use('/api/habits',require('./routes/api/habits'));
app.use('/api/transactions',require('./routes/api/transactions'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'))

// Serve static content in production
if(process.env.NODE_ENV == "production") {
    app.use(express.static('public'));
    app.get('*', (req,res) => {
        res.redirect('https://fin-track.netlify.app');
    })
}

// Forward invalid routes to the error handler below
app.use((req,res,next) => {
    const error = new Error('Page Not found');
    error.httpCode = 404;
    next(error);
})

// Handle all errors thrown
app.use((err,req,res,next) => {
    res.status(err.httpCode || 500 ).json({ error: err.message || 'Server error' })
});

module.exports = app;