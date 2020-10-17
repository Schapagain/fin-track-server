const mongoose = require('mongoose');
const app = require('./app');

// DB configuration
const db = require('./config/db').mongoURI;

// Connect to the database
mongoose
    .connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {console.log('Connected to MongoDB')})
    .catch( err => console.log(err))

// Start the server and listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Listening on port',PORT));

