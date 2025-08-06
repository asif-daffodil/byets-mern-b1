const express = require('express');
const router = express.Router();
const becript = require('bcrypt');

router.get('/', (req, res) => {
    res.send('API is working');
});

router.get('/hash/:pass', (req, res) => {
    const password = req.params.pass;
    becript.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }
        res.send(`Hashed password: ${hash}`);
    });
});

module.exports = router;