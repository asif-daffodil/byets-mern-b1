const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/siam", (req, res) => {
    res.send("Siam auto accident koreche!");
});

app.listen(8000, () => {
    console.log("Server is running on port 4000");
});