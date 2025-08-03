const express = require('express');
const app = express();
const cors = require('cors');

// static file serving
app.use(express.static('public'));

// cors options
const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); 

app.listen("5000", () => {
    console.log("Server is running on http://localhost:5000");
});

