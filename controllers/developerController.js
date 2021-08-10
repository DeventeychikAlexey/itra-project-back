const { dbQueries } = require("../lib");

async function changeRights(id, from, to) {
  const user = await dbQueries.getOne("users", { id });
  if (!user) throw new Error("No one is found");
  if (user.id_right != from) throw new Error("You can not change his rights");
  return await dbQueries.updateOne("users", { id_right: to }, { id });
}

const developerController = {
  async upgradeUser({ body }, res) {
    try {
      const result = await changeRights(body.id, 2, 1);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async downgradeUser({ body }, res) {
    try {
      const result = await changeRights(body.id, 1, 2);
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = developerController;
