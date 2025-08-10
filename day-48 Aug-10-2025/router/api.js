const express = require('express');
const router = express.Router();
const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const upload = multer({ storage: diskStorage, fileFilter: fileFilter });

router.get('/', (req, res) => {
    res.json({ message: 'API is working' });
})

router.post('/data', (req, res) => {
    const requestData = req.body;
    res.json({ receivedData: requestData });
});

router.post('/upload', (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: 'File uploaded successfully', file: req.file });
    });
});

module.exports = router;