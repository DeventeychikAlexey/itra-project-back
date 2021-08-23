const { collections, tags, topics, users, rights, items } = require("../db");

const { utils } = require("../lib");

const baseController = {
  // Collections
  async getCollections({}, res) {
    try {
      const result = await collections.findAll();
      for (let i = 0; i < result.length; i++) {
        const itemsCount = (
          await items.findAll({
            where: { id_collection: result[i].dataValues.id },
          })
        ).length;
        result[i].dataValues.countItems = itemsCount;
      }
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getUserCollections({ params }, res) {
    try {
      const result = await collections.findAll({
        where: { id_user: params.userId },
      });
      for (let i = 0; i < result.length; i++) {
        const itemsCount = (
          await items.findAll({
            where: { id_collection: result[i].dataValues.id },
          })
        ).length;
        result[i].dataValues.countItems = itemsCount;
      }
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getCollection({ params }, res) {
    try {
      const result = await collections.findOne({
        where: { id: params.id },
      });
      const itemsCount = (
        await items.findAll({
          where: { id_collection: result.dataValues.id },
        })
      ).length;
      result.dataValues.countItems = itemsCount;
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  // Items
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
  // Users
  async getUsers({}, res) {
    try {
      let result = await users.findAll();
      const allRights = await rights.findAll();
      result.forEach((el) => {
        el = utils.getUserAndRight(el, allRights);
        delete el.dataValues.login;
        delete el.dataValues.password;
      });
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getUser({ params }, res) {
    try {
      let user = await users.findOne({ where: { id: params.id } });
      const allRights = await rights.findAll();
      if (user) {
        user = utils.getUserAndRight(user, allRights);
        delete user.dataValues.login;
        delete user.dataValues.password;
      }
      res.status(200).send({
        msg: user,
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
};

module.exports = baseController;
