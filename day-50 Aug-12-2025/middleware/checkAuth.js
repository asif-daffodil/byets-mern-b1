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
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
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
        return res.status(401).json({ message: "Unauthorized" });
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
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = {
    checkAuth,
    checkAdmin,
    checkVendor
};
