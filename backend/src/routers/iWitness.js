const express = require("express");
const createIWitness = require("../controllers/iWitness");
const { auth } = require("../middlewares/auth");
const {
  validateUserIdInParam,
  validateIWitnessReportData,
} = require("../validators/reports");
const validation = require("../validators/common");

const router = express.Router();

router.put(
  "/:userId",
  auth,
  validateUserIdInParam,
  validateIWitnessReportData,
  validation,
  createIWitness
);

module.exports = router;
