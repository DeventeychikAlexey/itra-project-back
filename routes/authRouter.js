const Router = require("express").Router;
const router = new Router();
const { authController } = require("../controllers");

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
