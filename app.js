const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const expressRateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const validator = require("validator");

const app = express();

// Load environment variables from a .env file if present
dotenv.config();


const router = require('./src/routes/api')

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().any()); // Example usage of multer
app.use(cors());
app.use(expressMongoSanitize());
app.use(
  expressRateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(helmet());
app.use(hpp());
// app.use(validator());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use(router)

app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    message: "page not found",
  });
});

module.exports = app;
