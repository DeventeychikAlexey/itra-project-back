const { utils } = require("../lib");
const config = require("../config/config");
const { collections, items, itemsTags, tags } = require("../db");

const adminController = {
  // Users
  async toggleBlockedUser({ params }, res) {
    try {
      const result = await utils.toggleBlocked(params.id, [config.user]);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async deleteUser({ params }, res) {
    try {
      const result = await utils.deleteUser(params.id, [config.user]);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  // Collections
  async createCollection({ body, params }, res) {
    try {
      const result = await collections.create({
        name: body.name,
        description: body.description,
        id_topic: body.id_topic,
        image: body.image,
        id_user: params.id,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async updateCollection({ body, params }, res) {
    try {
      const result = await collections.update(body, {
        where: { id: params.id },
      });
      if (!!!result[0]) throw new Error("Ничего не изменилось!");
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async deleteCollection({ params }, res) {
    try {
      const result = await utils.deleteCollection(params.id);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  // Items
  async createItem({ body }, res) {
    try {
      const result = await utils.createItem(body);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },

  async deleteItem({ params }, res) {
    try {
      const result = await items.destroy({ where: { id: params.id } });
      await utils.deleteUnusedTags();
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async updateItem({ body, params }, res) {
    try {
      const result = await utils.updateItem(body, params);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = adminController;
