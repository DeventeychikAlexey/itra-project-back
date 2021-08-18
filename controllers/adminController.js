const { utils } = require("../lib");
const config = require("../config/config");
const { collections } = require("../db");

const adminController = {
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
};

module.exports = adminController;
