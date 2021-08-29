const Router = require("express").Router;
const router = new Router();
const { baseController } = require("../controllers");

// Users
router.get("/users", baseController.getUsers);
router.get("/user/:id", baseController.getUser);

// Collections
router.get("/collections", baseController.getCollections);
router.get("/collections/:userId", baseController.getUserCollections);
router.get("/collection/:id", baseController.getCollection);
router.get("/collection/items/:id", baseController.countCollectionItems);

// Items
router.get("/items", baseController.getItems);
router.get("/items/:collectionId", baseController.getCollectionItems);
router.get("/item/likes/:id", baseController.countItemLikes);
router.get("/item/:id", baseController.getItem);

// Tags
router.get("/tags", baseController.getTags);

// Topics
router.get("/topics", baseController.getTopics);

// Images
router.get("/image/:collectionId", baseController.downloadImage);

// Comments
router.get("/comment/item/:id", baseController.getItemComments);
router.get("/comment/update/item/:id", baseController.getNewComment);

module.exports = router;
