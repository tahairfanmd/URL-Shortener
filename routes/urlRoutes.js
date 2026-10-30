const express = require("express");
const router = express.Router();
const controller = require("../controllers/urlController");

router.post("/shorten", controller.createShortUrl);
router.get("/urls", controller.getUrls);
router.delete("/urls/:id", controller.deleteUrl);

module.exports = router;
