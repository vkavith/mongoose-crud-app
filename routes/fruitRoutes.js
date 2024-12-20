const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

//get all fruits
router.get("/", async (req, res) => {
  try {
    const allFruit = await Fruit.find({});
    res.json(allFruit);
    //Fruit.find({})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new Fruit
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const createdFruit = await Fruit.create(req.body);
    console.log(req.body);
    res.json(createdFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//show route - get 1 fruit

router.get("/:id", async (req, res) => {
  try {
    const singleFruit = await Fruit.findById(req.params.id);
    res.json(singleFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//
router.put("/:id", async (req, res) => {
  try {
    const updateFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
    res.json(deletedFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
