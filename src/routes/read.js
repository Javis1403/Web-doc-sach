const express = require("express");
const router = express.Router();

const readController = require("../app/controllers/ReadController");

router.get("/:slug", readController.index);

module.exports = router;
