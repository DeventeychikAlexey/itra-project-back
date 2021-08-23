const { collections } = require("../db");

const userController = {
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
  async upload({ file }, res) {
    try {
      console.log(file);
      res.status(200).send({ msg: null });
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error });
    }
  },
};

module.exports = userController;
