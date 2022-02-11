const express = require("express");

const authControllers = require("../Controllers/auth.controllers");

const router = express.Router();

router.post("/login", authControllers.doLogin);

module.exports = router;
