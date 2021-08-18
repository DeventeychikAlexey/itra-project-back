const Router = require("express").Router;
const router = new Router();
const { baseController } = require("../controllers");

router.get("/collections", baseController.getCollections);
router.get("/items", baseController.getItems);
router.get("/users", baseController.getUsers);
router.get("/tags", baseController.getTags);
router.get("/topics", baseController.getTopics);

module.exports = router;
