const {
  tags,
  topics,

  items,
  likesUsersItems,
} = require("../db");
const emitter = require("../config/emitter");

const { utils } = require("../lib");

const baseController = {
  // Users
  async getUsers({}, res) {
    try {
      const result = await utils.findUsers();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getUser({ params }, res) {
    try {
      const result = await utils.findUsers({ id: params.id });
      res.status(200).send({
        msg: result[0],
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Collections
  async getCollections({}, res) {
    try {
      const result = await utils.findCollections();
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getUserCollections({ params }, res) {
    try {
      const result = await utils.findCollections({ id_user: params.userId });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getCollection({ params }, res) {
    try {
      const result = await utils.findCollections({ id: params.id });
      res.status(200).send({ msg: result[0] });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async countCollectionItems({ params }, res) {
    try {
      const collectionItems = await items.findAll({
        where: { id_collection: params.id },
      });
      res.status(200).send({
        msg: collectionItems.length,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Items
  async getItem({ params }, res) {
    try {
      const result = await utils.findItems({ id: params.id });
      res.status(200).send({
        msg: result[0],
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getItems({}, res) {
    try {
      const result = await utils.findItems();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getCollectionItems({ params }, res) {
    try {
      const result = await utils.findItems({
        id_collection: params.collectionId,
      });
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async countItemLikes({ params }, res) {
    try {
      const likes = await likesUsersItems.findAll();
      const itemLikes = likes.filter((like) => like.id_item == params.id);
      res.status(200).send({
        msg: itemLikes.length,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Tags
  async getTags({}, res) {
    try {
      let result = await tags.findAll();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  // Topics
  async getTopics({}, res) {
    try {
      let result = await topics.findAll();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Images
  async downloadImage({ params }, res) {
    try {
      const result = await utils.downloadImage(params.collectionId);
      const image = `data:image/jpeg;base64,${Buffer.from(
        result.fileBinary
      ).toString("base64")}`;
      res.status(200).send({ msg: image });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Comments
  async getItemComments({ params }, res) {
    try {
      const result = await utils.getItemComments(params.id);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  async getNewComment({ params }, res) {
    try {
      emitter.once("newComment", async (comment) => {
        if (params.id === comment.id_item) {
          const result = await utils.getItemComments(params.id);
          res.status(200).send({ msg: result });
        }
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = baseController;
