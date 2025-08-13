const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

const conn = mongoose.connect(process.env.MONGODB_URI);
if(conn) {
    console.log("DB Connected successfully");
}

const apiRouter = require('./router/api');
app.use('/api', apiRouter);

const userRouter = require('./router/userRouter');
app.use('/user', userRouter);

const authRouter = require('./router/authRouter');
app.use('/auth', authRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})