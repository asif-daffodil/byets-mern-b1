const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('About Us');
})

app.get('/contact', (req, res) => {
    res.send('Contact Us');
})

app.get('/sazzad', (req, res) => {
    res.send('Get Request to Sazzad');
})

app.post('/sazzad', (req, res) => {
    res.send('Post Request to Sazzad');
})

app.put('/morshad', (req, res) => {
    res.send('Put Request to Morshad');
})

app.delete('/khorshed', (req, res) => {
    res.send('Delete Request to Khorshed');
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
})

app.get('/students/{:id}', (req, res) => {
    const stdId = req.params.id;
    if (stdId) {
        res.send(`Student ID is ${stdId}`);
    } else {
        res.send('No Student ID provided');
    }
})

app.get('/employees/:id/:name', (req, res) => {
    // const empId = req.params.id;
    // const empName = req.params.name;
    const { id: empId, name: empName } = req.params;
    res.send(`Employee ID is ${empId} and Name is ${empName}`);
})

// query parameters
app.get('/search', (req, res) => {
    // const q = req.query.q;
    // const page = req.query.page 
    const { q, page } = req.query;
    res.send(`Search Query: ${q}, Page: ${page}`);
})

// checkAge middleware
const checkAge = (req, res, next) => {
    const age = req.params.age;
    if(!age) {
        res.send('Age parameter is required');
    }else if (isNaN(age)) {
        res.send('Age must be a number');
    }else if (age < 18) {
        res.send('You must be at least 18 years old');
    } else {
        next(); 
    }
}

app.get('/fahima{/:age}', checkAge, (req, res) => {
    res.send('Hello Fahima!');
})

 

app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
})

