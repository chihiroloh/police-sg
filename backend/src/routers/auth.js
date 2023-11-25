const express = require("express");
const { register, login, refresh } = require("../controllers/auth");
const {
  validateRegistrationData,
  validateLoginData,
  validateRefreshToken,
} = require("../validators/auth");
const validation = require("../validators/common");

const router = express.Router();

router.put("/register", validateRegistrationData, validation, register);
router.post("/login", validateLoginData, validation, login);
router.post("/refresh", validateRefreshToken, validation, refresh);

module.exports = router;
