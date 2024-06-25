const { login, refreshToken, verifyToken,me, forgetPassword, resetPassword } = require("../controllers/auth.controller");
const express = require('express');
const auth = require("../middleware/auth");

const router = express.Router();
  

router.post("/login", login);

router.post("/refresh-token", refreshToken);

router.get('/verify-token',auth, verifyToken);

router.get('/me', auth, me);

router.post('/forgot-password', forgetPassword);

router.post('/reset-password/:token', resetPassword);

module.exports = router;
