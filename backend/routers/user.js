const { Router } = require("express");
const controllers  = require("../controllers/controller");


const middlewares = require("../middlewares/middleware");


const router = Router();

router.post("/signup",controllers.addUser);
router.post("/login",controllers.checkuser);

module.exports = router;
