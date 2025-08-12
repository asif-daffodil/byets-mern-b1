const express = require('express');
const router = express.Router();
const { addUser, getAllUsers, updateUser, deleteUser } = require('../controller/userController');

router.post("/add", addUser);
router.get("/all", getAllUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;