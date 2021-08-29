const { collections, likesUsersItems, items, comments } = require("../db");
const { utils } = require("../lib");
const emitter = require("../config/emitter");

const userController = {
  // Collections
  async createCollection({ body, user }, res) {
    try {
      const result = await collections.create({
        name: body.name,
        description: body.description,
        id_topic: body.id_topic,
        image: body.image,
        id_user: user.id,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async updateCollection({ body, user, params }, res) {
    try {
      const result = await collections.update(body, {
        where: { id: params.id, id_user: user.id },
      });
      if (!!!result[0]) throw new Error("Nothing has been changed!");
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async deleteCollection({ user, params }, res) {
    try {
      const collection = await collections.findOne({
        where: { id: params.id },
      });
      if (collection?.dataValues?.id_user != user.id)
        throw new Error("You can not delete!");
      const result = await utils.deleteCollection(params.id);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  //Items
  async createItem({ body, user }, res) {
    try {
      const collection = await collections.findOne({
        where: { id: body.id_collection, id_user: user.id },
      });
      if (!collection) throw new Error("It's not available!");
      const result = await utils.createItem(body);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  async deleteItem({ user, params }, res) {
    try {
      const item = await items.findOne({ where: { id: params.id } });
      const collection = await collections.findOne({
        where: { id: item.dataValues.id_collection, id_user: user.id },
      });
      if (!collection) throw new Error("Коллекция вам не принадлежит!");
      const result = await item.destroy({ where: { id: params.id } });
      await utils.deleteUnusedTags();
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  async updateItem({ body, user, params }, res) {
    try {
      const userCollections = collections.findAll({
        where: { id_user: user.id },
      });
      if (userCollections.length === 0) throw new Error("У вас нет коллекций!");
      // const item = userCollections.some(
      //   async (collection) =>
      //     await items.findOne({
      //       where: { id_collection: collection.dataValues.id },
      //     })
      // );
      // if (!item) throw new Error("Этой айтем вам не принадлежит!");

      const result = await utils.updateItem(body, params);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Images
  async uploadImage({ file }, res) {
    try {
      res.status(200).send({ msg: file });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async removeImage({ params }, res) {
    try {
      const result = await utils.removeImage(params.collectionId);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Likes
  async getLikedItem({ user, params }, res) {
    try {
      const result = await likesUsersItems.findOne({
        where: { id_user: user.id, id_item: params.id },
      });
      res.status(200).send({ msg: !!result?.id });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async likeItem({ user, params }, res) {
    try {
      const result = await likesUsersItems.create({
        id_user: user.id,
        id_item: params.id,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async unlikeItem({ user, params }, res) {
    try {
      const result = await likesUsersItems.destroy({
        where: { id_user: user.id, id_item: params.id },
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  // Comments
  async createComment({ user, body, params }, res) {
    try {
      const result = await comments.create({
        id_user: user.id,
        id_item: params.id,
        comment: body.comment,
      });
      emitter.emit("newComment", result);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = userController;
