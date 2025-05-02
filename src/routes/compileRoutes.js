const { Router } = require("express");
const {compileCode}= require("../controllers/compileservice.controller.js");
const router = Router();
router.post("/run/:language", compileCode);
module.exports = router;