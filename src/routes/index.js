const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const express = require("express");
const { generateImages } = require("../controller");
const api = express.Router();

api.route("/generate-image").post(async (req, res, next) => {
  try {
    const { text } = req.body;
    const data = await generateImages(text);
    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    next(error);
  }
});

api.route("/generate-image-fake").post(async (req, res, next) => {
  try {
    const data = process.env.DUMB_IMAGE;
    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    next(error);
  }
});

module.exports = api;
