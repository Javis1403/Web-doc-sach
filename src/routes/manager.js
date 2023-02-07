const express = require("express");
const router = express.Router();

const managerController = require("../app/controllers/ManagerController");

router.get("/manager", managerController.stored);
router.get("/manager/:_id/edit", managerController.edit);
router.delete("/manager/:_id", managerController.delete);
module.exports = router;
