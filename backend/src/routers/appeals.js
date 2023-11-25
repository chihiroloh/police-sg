const express = require("express");
const { seedAppeals, getAllAppeals } = require("../controllers/appeals");
const { auth, authAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, getAllAppeals);
router.put("/seed", authAdmin, seedAppeals);

module.exports = router;
