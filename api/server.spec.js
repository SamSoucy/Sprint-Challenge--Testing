const server = require("./server");
const request = require("supertest")

describe("testing the API", () => {
    describe("return games", () => {
        it("should return a list of games even if there are no games ", async () => {
            const res = await request(server).get("/games");
            expect(Array.isArray(res.body)).toBeTruthy();
        });

        it("should have a status code of 200", async () => {
            const res = await request(server).get("/games");
            expect(res.status).toBe(200);
        });

        it("should return the total number of games in the db", async () => {
            const res = await request(server).get("/games");
            expect(res.body.length).toBe(1);
        });
    });

    describe("post", () => {
        it("should return status code 422 if information is incorrectly sent", async () => {
            const game = { game: 'Super mario Brothers' };
            const res = await request(server).post("/games").send(game);
            expect(res.status).toBe(422);
        });

        it("should return status code 422 if data is not complete ", async () => {
            const game = { title: 'Pacman' };
            const res = await request(server).post("/games").send(game);
            expect(res.status).toBe(422);
        });

        it("should return status code 201 if a game is properly added", async () => {
            const game = { id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980 };
            const res = await request(server).post("/games").send(game);
            expect(res.status).toBe(201);
        });
    })
})
