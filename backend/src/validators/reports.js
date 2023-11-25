const { body, param } = require("express-validator");

const validateIdInParam = [
  param("id", "id is invalid").isLength({ min: 24, max: 24 }),
];

const validateUserIdInParam = [
  param("userId", "user id is invalid").isLength({ min: 24, max: 24 }),
];

const validateIdInBody = [
  body("id", "id is invalid").isLength({ min: 24, max: 24 }),
];

const validateUserReportData = [
  body("type", "report type is required").notEmpty(),
  body("primaryInfo", "primary information is required").notEmpty(),
  body("dateOccurred", "invalid date").notEmpty().isDate(),
  body("timeOccurred", "invalid time").notEmpty(),
  body("locationOccurred", "invalid location").optional().isAlphanumeric(),
];

const validateIWitnessReportData = [
  body("type", "report type is required").notEmpty(),
  body("primaryInfo", "primary information is required").notEmpty(),
  body("dateOccurred", "invalid date").optional().isDate(), // optional; but if provided, must be Date type
  body("timeOccurred", "invalid time").optional().notEmpty(),
  body("locationOccurred", "invalid location").optional().isAlphanumeric(),
];

const validateUserReportUpdate = [
  body("type", "type is required").notEmpty(),
  body("io", "io is required").notEmpty(),
  body("branch", "branch is required").notEmpty(),
];

const validateStatusUpdate = [
  body("status", "invalid status")
    .notEmpty()
    .isIn(["Pending", "Active", "Completed"]),
];

module.exports = {
  validateIdInParam,
  validateUserIdInParam,
  validateIdInBody,
  validateUserReportData,
  validateIWitnessReportData,
  validateUserReportUpdate,
  validateStatusUpdate,
};
