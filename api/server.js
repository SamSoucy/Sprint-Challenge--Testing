const express = require('express');
const server = express();
server.use(express.json());

let games = [
    {
        id: 1,
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
    }
];

server.get("/", (req, res) => {
    res.status(200).json({ api: "Server is ready" });
});

server.get('/games', (req, res) => {
	res.status(200).json(games);
});

module.exports = server;