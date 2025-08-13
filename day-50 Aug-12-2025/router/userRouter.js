const express = require('express');
const router = express.Router();
const { addUser, getAllUsers, updateUser, deleteUser } = require('../controller/userController');
const { checkAdmin, checkAuth } = require('../middleware/checkAuth');

router.post("/add", checkAdmin, addUser);
router.get("/all", checkAdmin, getAllUsers);
router.put("/update/:id", checkAuth, updateUser);
router.delete("/delete/:id", checkAuth, deleteUser);

module.exports = router;