const express = require("express");
const getAllReportTypes = require("../controllers/reportTypes");

const router = express.Router();

router.get("/", getAllReportTypes);

module.exports = getAllReportTypes;
