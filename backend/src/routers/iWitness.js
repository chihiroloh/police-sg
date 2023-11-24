const express = require("express");
const createIWitness = require("../controllers/iWitness");

const router = express.Router();

router.put("/:userId", createIWitness);

module.exports = router;
