const Router = require("express").Router;
const router = new Router();
const { baseController } = require("../controllers");

router.get("/collections", baseController.getCollections);
router.get("/collections/:userId", baseController.getUserCollections);
router.get("/collection/:id", baseController.getCollection);
router.get("/items", baseController.getItems);
router.get("/items/:collectionId", baseController.getCollectionItems);
// router.get("/item/:id", baseController.getItems);
router.get("/users", baseController.getUsers);
router.get("/user/:id", baseController.getUser);
router.get("/tags", baseController.getTags);
router.get("/topics", baseController.getTopics);

module.exports = router;
