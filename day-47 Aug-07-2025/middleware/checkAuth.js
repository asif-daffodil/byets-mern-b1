const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.MORSHED_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ valid: false, error: err.message });
        }
        req.user = decoded; // Attach user data to request object
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = checkAuth;