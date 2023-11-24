const express = require("express");
const {
  getReportsByUserId,
  createUserReport,
  createReportUpdate,
  updateReportStatus,
} = require("../controllers/reports");

const router = express.Router();

router.get("/:userId", getReportsByUserId);
router.put("/:userId", createUserReport);
router.put("/:id/update", createReportUpdate);
router.patch("/:id/status", updateReportStatus);

module.exports = router;
