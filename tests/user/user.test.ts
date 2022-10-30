import supertest from "supertest";
import {connect,disconnect,connection} from "mongoose";
import {createServer} from "../../src/utils/server";
import {dbConnection} from "../../src/utils/connection";
import {loadDbConfigAsync} from "../../src/config/db.config";

const app = createServer('3000').getApp();

describe("/api/users", () => {
    beforeAll(async () => {
        const config = await loadDbConfigAsync();
        connect(dbConnection(config.database));
    })

    afterAll(async () => {
        
        await disconnect();
        await connection.close();
    })

    describe("GET: /api/users", () => {
        test("shoudld return respond with a 200 status",async () => {
            const responce = await supertest(app).get('/api/users');

            expect(responce.statusCode).toBe(200);
        })
        
        test("shoudld return respond with a 200 status and user object",async () => {
            const responce = await supertest(app).get('/api/users');

            expect(responce.statusCode).toBe(200);
            expect(responce.body).toBeTruthy();
        })
    })

    describe("GET: /api/users/:id", () => {
        test("should return respond with a 404 status", async () => {
            const id = "635dad879add6e5e8f187bd1";
            const responce = await supertest(app).get(`/api/users/${id}`);

            expect(responce.statusCode).toBe(404);
        })
    })
})