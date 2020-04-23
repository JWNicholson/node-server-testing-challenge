const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');


describe("server", () => {
    test("runs the tests", () => {
        expect(true).toBe(true);
    })
});

describe("POST to /api/users", () => {
    test("returns status 201 CREATED", () => {
        console.log(process.env.DATABASE_ENV)
        return request(server)
            .post("/api/users")
            .send({ name: "test_name" })
            .then(res => {
                expect(res.status).toBe(201);
        });
    });

    test("returns JSON formatted body", () => {
        return request(server)
            .post("/api/users")
            .then(res => {
                expect(res.type).toMatch(/json/);
        });
    });


});

