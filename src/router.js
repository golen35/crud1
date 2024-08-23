const express = require("express");

const router = express.Router();

// Require controller modules.
import { SignugControllers } from "./controller/AuthControllers";

router.get("/signug", SignugControllers);


module.exports = router;
