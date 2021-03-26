const express = require("express");
const router = express.Router();
const { user } = require("../models");
const Sequelize = require("sequelize");

router.get("/", async (req, res, next) => {
  const users = await user.findAll();
  res.render("perpanjang", { title: "perpanjang", users });
});

module.exports = router;
