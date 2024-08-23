const express = require("express");

const router = express.Router();

// Require controller modules.
import { signugControllers } from "./controller/authControllers";

router.get("/s", signugControllers);


module.exports = router;
