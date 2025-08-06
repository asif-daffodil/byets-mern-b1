const express = require('express');
const app = express();
const cors = require('cors');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.static('public'));

const apiRouter = require('./router/api');
app.use('/api', apiRouter);

const webRouter = require('./router/web');
app.use('/', webRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});