const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));


const routerApi = require('./router/api');
app.use('/api', routerApi);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});