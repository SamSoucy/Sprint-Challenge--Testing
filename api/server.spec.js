const server = require("./server");
const request = require("supertest")

describe("testing the API", () => {
    describe("return games", () => {
        it("should return a list of games", async () => {
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
})
