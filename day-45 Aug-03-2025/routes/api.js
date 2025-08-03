const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("API is working");
})

router.get("/status", (req, res) => {
    res.send("hu hu ha ha ha ha");
});

router.get("/getImg", (req, res) => {
    res.sendFile("morshed.jpg", { root: "public" });
});

router.get("/getImg2", (req, res) => {
    res.sendFile("morshed-2.jpg", { root: "public/images" });
});

module.exports = router;