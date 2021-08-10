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
};

module.exports = adminController;
