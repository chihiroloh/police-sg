const { body } = require("express-validator");

const validateRegistrationData = [
  body("email", "email is required").notEmpty(),
  body("email", "email is invalid").isEmail(),
  body("password", "password is required").notEmpty(),
  body("password", "password must be min 8 and max 20 characters").isLength({
    min: 8,
    max: 50,
  }),
  body("name", "name is required").notEmpty(),
];

const validateLoginData = [
  body("email", "email is required").notEmpty(),
  body("email", "email is invalid").isEmail(),
  body("password", "password is required").notEmpty(),
];

const validateRefreshToken = [
  body("refresh", "refresh token is invalid").notEmpty().isLength({ min: 1 }),
];

module.exports = {
  validateRegistrationData,
  validateLoginData,
  validateRefreshToken,
};
