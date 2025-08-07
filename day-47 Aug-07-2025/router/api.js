const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/checkAuth');

router.get('/', (req, res) => {
  res.send('API is working');
});


router.get("/pass/:pass", (req, res) => {
    const password = req.params.pass;
    const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    res.json({ hashedPassword });
})

router.get("/morshed", (req, res) => {
    const secretKey = process.env.MORSHED_SECRET_KEY;
    res.json({ secretKey });
});

router.post("/jwt", (req, res) => {
    const userData = {
        name: "Morshed",
        email: "morshed@khorshed.com",
        role: "admin",
        age: 25,
    }
    const token = jwt.sign(userData, process.env.MORSHED_SECRET_KEY, { expiresIn: '1m', algorithm: 'HS256' });
    res.json({ token });
});

router.get("/jwt/verify", checkAuth, (req, res) => {
    res.json({ valid: true, decoded: req.user });
});

module.exports = router;