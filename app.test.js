// app.test.js
import request from 'supertest';
import { expect } from 'chai';
import app from './app.js';  // Ensure this path is correct

describe('GET /todos', function() {
    it('should return a 200 status and the list of todos', async function() {
        const res = await request(app).get('/todos');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(3);
        expect(res.body[0]).to.include({
            id: 1,
            description: "buy groceries 😃🍎",
            completed: false
        });
        expect(res.body[1]).to.include({
            id: 2,
            description: "drink water 🥤",
            completed: false
        });
        expect(res.body[2]).to.include({
            id: 3,
            description: "help papa water plants 😛🥦",
            completed: true
        });
    });
});
