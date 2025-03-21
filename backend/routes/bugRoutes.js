const express = require("express");
const bugController = require("../controllers/bugController");

const router = express.Router();

router.post("/bugs", bugController.createBug);
router.get("/bugs", bugController.getAllBugs);
router.put("/bugs/:id", bugController.updateBugStatus);
router.delete("/bugs/:id", bugController.deleteBug);

module.exports = router;
