const express = require("express");
const {
  getReportsByUserId,
  createUserReport,
  createReportUpdate,
  updateReportStatus,
  deleteReportById,
  deleteReportUpdate,
} = require("../controllers/reports");
const { auth, authAdmin } = require("../middlewares/auth");
const {
  validateIdInParam,
  validateUserIdInParam,
  validateUserReportData,
  validateUserReportUpdate,
  validateStatusUpdate,
  validateIdInBody,
} = require("../validators/reports");
const validation = require("../validators/common");

const router = express.Router();

router.get(
  "/:userId",
  auth,
  validateUserIdInParam,
  validation,
  getReportsByUserId
);
router.put(
  "/:userId",
  auth,
  validateUserIdInParam,
  validateUserReportData,
  validation,
  createUserReport
);
router.put(
  "/:id/update",
  authAdmin,
  validateIdInParam,
  validateUserReportUpdate,
  validation,
  createReportUpdate
);
router.patch(
  "/:id/status",
  authAdmin,
  validateIdInParam,
  validateStatusUpdate,
  validation,
  updateReportStatus
);
router.delete(
  "/:id",
  authAdmin,
  validateIdInParam,
  validation,
  deleteReportById
);

router.delete(
  "/:id/update",
  authAdmin,
  validateIdInParam,
  validateIdInBody,
  validation,
  deleteReportUpdate
);

module.exports = router;
