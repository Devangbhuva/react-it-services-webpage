const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// CREATE
router.post("/service", async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json({ message: "Service Added" });
});

// READ
router.get("/services", async (req, res) => {
  const data = await Service.find();
  res.json(data);
});

// DELETE
router.delete("/service/:id", async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE
router.put("/service/:id", async (req, res) => {
  await Service.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Service Updated" });
});

module.exports = router;