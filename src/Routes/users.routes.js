const express = require("express");

const userControllers = require("../Controllers/users.controllers");

const router = express.Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getSpecificUser);
router.post("/", userControllers.addNewUsers);
router.put("/:id", userControllers.updateUserInfo);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
