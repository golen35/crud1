const express = require("express");

const router = express.Router();

// Require controller modules.
import { 
    CreateControllers, 
    UsersControllers, 
    UpdateControllers,
    DeleteControllers 
} from "./controller/CrudsControllers";

// All Routes
router.get("/getAllUsers", UsersControllers);
router.post("/create", CreateControllers);
router.put("/update/:id", UpdateControllers);
router.delete("/delete/:id", DeleteControllers);

module.exports = router;
