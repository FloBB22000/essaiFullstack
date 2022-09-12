/* eslint-disable import/no-unresolved */
const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const schoolControllers = require("./controllers/schoolControllers");

// GET
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/schools", schoolControllers.browse);
router.get("/schools/:id", schoolControllers.read);

// UPDATE
router.put("/items/:id", itemControllers.edit);
router.put("/schools/:id", schoolControllers.edit);

// CREATE
router.post("/items", itemControllers.add);
router.post("/schools", schoolControllers.add);

// DELETE
router.delete("/items/:id", itemControllers.destroy);
router.delete("/schools/:id", schoolControllers.destroy);

module.exports = router;
