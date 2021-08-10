const { dbQueries, utils } = require("../lib");
const { config } = require("../config");

async function changeRights(id, from, to) {
  const user = await dbQueries.getOne("users", { id });
  if (!user) throw new Error("No one is found");
  if (user.id_right != from) throw new Error("You can not change his rights");
  return await dbQueries.updateOne("users", { id_right: to }, { id });
}

const developerController = {
  async upgradeUser({ params }, res) {
    try {
      const result = await changeRights(params.id, config.user, config.admin);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async downgradeUser({ params }, res) {
    try {
      const result = await changeRights(params.id, config.admin, config.user);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async toggleBlockedUser({ params }, res) {
    try {
      const result = await utils.toggleBlocked(params.id, [
        config.user,
        config.admin,
      ]);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async deleteUser({ params }, res) {
    try {
      const result = await utils.deleteUser(params.id, [
        config.user,
        config.admin,
      ]);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = developerController;
