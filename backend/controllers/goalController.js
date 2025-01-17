const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const { text } = require("express");
// @desc    GET goals
// @route GET api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc    SET goal
// @route POST api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    UPDATE goals
// @route PUT api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found ");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    DELETE goals
// @route DELETE api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404); // Goal not found, 404 is the appropriate status code.
    throw new Error("Goal not found");
  }

  // Use deleteOne() or delete() to remove the document.
  await Goal.deleteOne({ _id: req.params.id });

  res
    .status(200)
    .json({ message: `Goal with ID ${req.params.id} has been deleted` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
