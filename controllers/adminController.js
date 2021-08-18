const { dbQueries, utils } = require("../lib");
const { config } = require("../config");

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
  async getUsers(req, res) {
    try {
      const result = await dbQueries.getAll("users");
      result.forEach((el) => {
        delete el["password"];
        delete el["login"];
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async createCollection({ body, params }, res) {
    try {
      const result = await dbQueries.insertOne("collections", {
        name: body.name,
        description: body.description,
        id_topic: body.id_topic,
        image: body.image,
      });
      await utils.bindUserCollection(params.id, result.insertId);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = adminController;
