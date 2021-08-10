const dbQueries = require("./databaseQueries");

const utils = {
  async toggleBlocked(id, rights) {
    const user = await dbQueries.getOne("users", { id });
    if (!user) throw new Error("No one is found");
    if (rights.every((right) => user.id_right != right))
      throw new Error("You can not change his rights");
    return await dbQueries.updateOne(
      "users",
      { blocked: user.blocked ? 0 : 1 },
      { id }
    );
  },
  async deleteUser(id, rights) {
    const user = await dbQueries.getOne("users", { id });
    if (!user) throw new Error("No one is found");
    if (rights.every((right) => user.id_right != right))
      throw new Error("You can not change his rights");
    return await dbQueries.removeOne("users", { id });
  },
};

module.exports = utils;
