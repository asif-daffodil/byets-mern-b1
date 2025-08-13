const User = require('../model/user');
const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    // check Bearer token
    const Bearer = req.headers['authorization']?.split(' ')[0];
    if (Bearer !== 'Bearer') {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // refresh token
        // If token expired, generate a new token and set it in response header
        if (decoded.exp * 1000 < Date.now()) {
            const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1m' });
            res.setHeader('Authorization', `Bearer ${newToken}`);
        }
        req.user = await User.findById(decoded.id);
        
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            // Decode without verifying to get the user ID
            const decoded = jwt.decode(token);
            if (!decoded) {
                return res.status(401).json({ message: "Invalid token" });
            }

            // Generate new token
            const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1m' });

            // Attach user & continue
            req.user = await User.findById(decoded.id);
            res.setHeader('Authorization', `Bearer ${newToken}`);
            next();
            return;
        }
        return res.status(401).json({ message: "Unauthorized" });
    }
};

const checkAdmin = async (req, res, next) => {
    const Bearer = req.headers['authorization']?.split(' ')[0];
    if (Bearer !== 'Bearer') {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            // Decode without verifying to get the user ID
            const decoded = jwt.decode(token);
            if (!decoded) {
                return res.status(401).json({ message: "Invalid token" });
            }

            // Generate new token
            const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1m' });
            res.setHeader('Authorization', `Bearer ${newToken}`);

            // Attach user & continue
            req.user = await User.findById(decoded.id);
            res.setHeader('Authorization', `Bearer ${newToken}`);
            next();
            return;
        }
        return res.status(401).json({ message: "Unauthorized", error });
    }
};

const checkVendor = async (req, res, next) => {
    const Bearer = req.headers['authorization']?.split(' ')[0];
    if (Bearer !== 'Bearer') {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (req.user.role !== 'vendor') {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            // Decode without verifying to get the user ID
            const decoded = jwt.decode(token);
            if (!decoded) {
                return res.status(401).json({ message: "Invalid token" });
            }

            // Generate new token
            const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1m' });

            // Attach user & continue
            req.user = await User.findById(decoded.id);
            res.setHeader('Authorization', `Bearer ${newToken}`);
            next();
            return;
        }
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = {
    checkAuth,
    checkAdmin,
    checkVendor
};
