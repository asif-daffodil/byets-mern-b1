const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

const apiRouter = require('./router/api');
app.use('/api', apiRouter);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});