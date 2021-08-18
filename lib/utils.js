const { users } = require("../db");

const utils = {
  async toggleBlocked(id, rights) {
    const user = await users.findOne({ where: { id } });
    if (!user) throw new Error("No one is found");
    if (rights.every((right) => user.dataValues.id_right != right))
      throw new Error("You can not change his rights");
    return await users.update(
      { blocked: user.dataValues.blocked ? 0 : 1 },
      { where: { id } }
    );
  },
  async deleteUser(id, rights) {
    const user = await users.findOne({ where: { id } });
    if (!user) throw new Error("No one is found");
    if (rights.every((right) => user.dataValues.id_right != right))
      throw new Error("You can not change his rights");
    return await users.destroy({ where: { id } });
  },
};

module.exports = utils;
