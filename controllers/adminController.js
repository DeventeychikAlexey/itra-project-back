const { utils } = require("../lib");
const config = require("../config/config");
const { collections, items } = require("../db");

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
  async createItem({ body, params }, res) {
    try {
      const result = await items.create({
        name: body.name,
        id_collection: params.id,
      });
      const id = result.dataValues.id;
      await utils.createFieldsInteger(id, body.fieldsNumber);
      await utils.createFieldsText(id, body.fieldsText);
      await utils.createFieldsString(id, body.fieldsString);
      await utils.createFieldsDate(id, body.fieldsDate);
      await utils.createFieldsBoolean(id, body.fieldsBoolean);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = adminController;
