const express = require("express");
const router = express.Router();

const {
  fetchSpankbang,
  fetchAsiaLeak,
  fetchMediafire,
  fetchGoogleDrive,
  fetchRacaty,
} = require("../controllers/index.js");

router.post("/spankbang", fetchSpankbang);
router.post("/asianleak", fetchAsiaLeak);
router.post("/mediafire", fetchMediafire);
router.post("/googledrive", fetchGoogleDrive);
router.post("/racaty", fetchRacaty);

module.exports = router;
