const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to the Web Page', pageName: 'home' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', pageName: 'about' });
});

module.exports = router;