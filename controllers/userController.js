const { dbQueries, utils } = require("../lib");

const userController = {
  async createCollection({ body, user }, res) {
    try {
      const result = await dbQueries.insertOne("collections", {
        name: body.name,
        description: body.description,
        id_topic: body.id_topic,
        image: body.image,
      });
      await utils.bindUserCollection(user.id, result.insertId);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getCollections({ user }, res) {
    try {
      const result = await dbQueries.getAll("users_collections_view", {
        id: user.id,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = userController;
