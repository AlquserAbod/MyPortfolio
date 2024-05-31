const { login, refreshToken, verifyToken,me } = require("../controllers/auth.controller");
const express = require('express');
const auth = require("../middleware/auth");

const router = express.Router();
  

router.post("/login", login);

router.post("/refresh-token", refreshToken);

router.get('/verify-token',auth, verifyToken);

router.get('/me', auth, me);


module.exports = router;
