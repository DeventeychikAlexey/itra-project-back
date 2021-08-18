const Router = require("express").Router;
const router = new Router();
const { baseController } = require("../controllers");

router.get("/collections", baseController.getCollections);
router.get("/items", baseController.getItems);

module.exports = router;
