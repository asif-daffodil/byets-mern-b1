const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(201).json({ message: "User registered successfully", user, token });

    } catch (error) {
        if (error.code === 11000 && error.keyPattern?.email) {
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: "Error registering user", error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

module.exports = {
    register,
    login
};