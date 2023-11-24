const express = require("express");
const { seedAppeals, getAllAppeals } = require("../controllers/appeals");

const router = express.Router();

router.get("/", getAllAppeals);
router.put("/seed", seedAppeals);

module.exports = router;
