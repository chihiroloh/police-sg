const express = require("express");
const imageUpload = require("../controllers/imageUpload");
const upload = require("../middlewares/imageUpload");

const router = express.Router();

router.post("/", upload.single("images"), imageUpload);

module.exports = router;
