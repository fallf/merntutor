const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Use the router to handle different routes
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router; // Export the router

// GET route for /api/goal
//router.get("/", getGoals);

// POST route for /api/goal
//router.post("/", setGoal);

// PUT route for /api/goal/:id
//router.put("/:id", updateGoal);

// DELETE route for /api/goal/:id
//router.delete("/:id", deleteGoal);
