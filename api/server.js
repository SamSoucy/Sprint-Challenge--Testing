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
//**************Testing the server******************/

server.get("/", (req, res) => {
    res.status(200).json({ api: "Server is ready" });
});

//*************List of games***************/

server.get('/games', (req, res) => {
	res.status(200).json(games);
});


//*************Add a game******************/
server.post("/games", (req, res) => {
    const { id, title, genre, releaseYear } = req.body;
    if ((!id, (!title && !genre && !releaseYear) || id === games.id)) {
        res.status(422).json({ err: "Add proper information" });
    } else {
        const newGame = { id, title, genre, releaseYear };
        games = [...games, newGame];
        res.status(201).json({ message:"new game added" });
        games.id++;
    }
})

module.exports = server;