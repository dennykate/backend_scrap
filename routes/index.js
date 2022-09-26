const express = require("express");
const router = express.Router();

const { fetchSpankbang, fetchAsiaLeak } = require("../controllers/index.js");

router.get("/spankbang", fetchSpankbang);
router.get("/asianleak", fetchAsiaLeak);

module.exports = router;
