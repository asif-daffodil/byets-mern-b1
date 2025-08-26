const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.emit("welcome", "Welcome to the Socket.IO server!");
    socket.emit('jasonData', { name: "Joshim", age: 30 });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

httpServer.listen(4000, () => {
    console.log('Server is running on port 4000');
});

