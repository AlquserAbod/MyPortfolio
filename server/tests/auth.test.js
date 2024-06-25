// tests/auth.test.js
const request = require('supertest');
const app = require('../server.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users.model.js');

describe('Auth API', () => {
    let accessToken;

    beforeAll(async () => {
        const hashedPassword = await bcrypt.hash('password123', 10);
        await User.create({
            first_name: 'Test',
            last_name: 'User',
            email: 'test@example.com',
            password: hashedPassword,
        });
    });

    afterAll(async () => {
        await User.deleteMany({});
    });

    it('should login a user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'test@example.com',
                password: 'password123',
            })
            .expect(200);

        accessToken = response.body.accessToken;

        expect(accessToken).toBeDefined();
    });

    it('should return unauthorized with invalid credentials', async () => {
        await request(app)
            .post('/api/auth/login')
            .send({
                email: 'wrong@example.com',
                password: 'wrongpassword',
            })
            .expect(401);
    });

    it('should refresh access token', async () => {
        const user = await User.findOne({ email: 'test@example.com' });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_SECRET_KEY);

        const response = await request(app)
            .post('/api/auth/refresh-token')
            .send({ token: refreshToken })
            .expect(200);

        accessToken = response.body.accessToken;

        expect(accessToken).toBeDefined();
    });

    it('should not refresh token with invalid refresh token', async () => {
        await request(app)
            .post('/api/auth/refresh-token')
            .send({ token: 'invalid-token' })
            .expect(401);
    });

    it('should forget password', async () => {
        await request(app)
            .post('/api/auth/forgot-password')
            .send({ email: 'test@example.com' })
            .expect(200);
    });

    it('should reset password', async () => {
        const user = await User.findOne({ email: 'test@example.com' });
        const resetToken = jwt.sign({ id: user._id }, process.env.RESET_PASSWORD_SECRET_KEY);

        await request(app)
            .post(`/api/auth/reset-password/${resetToken}`)
            .send({  newPassword: 'newpassword123' })
            .expect(200);
    });
});
