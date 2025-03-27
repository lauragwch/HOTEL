const supertest = require('supertest');
const app = require('../index');

let token;

beforeAll(async () => {
    const response = await supertest(app)
        .post('/auth/login')
        .send({
            "email": "jojo@gmail.com",
            "password": "qwerty"
        });
    token = response.body.token;
}
);

global.getToken = () => token
global.supertest = supertest;
global.app = app;       