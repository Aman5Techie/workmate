const { Router } = require("express");

const router = Router();

const user = require("./user");
// const { errorHandler } = require("../middlewares/errorhandler");

// router.use(errorHandler);
router.use("/api/v1/user", user);

module.exports = router;
