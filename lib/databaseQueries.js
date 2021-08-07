const { conn } = require("../config");

const databaseQueries = {
  async insertOne(table, data) {
    return (
      await (
        await conn
      ).execute(
        `INSERT INTO \`${table}\`(${Object.keys(data)
          .map((el) => `\`${el}\``)
          .join(",")}) VALUES (${Object.values(data)
          .map((el) => `'${el}'`)
          .join(",")})`
      )
    )[0];
  },
  async getAll(table) {
    return (await (await conn).execute(`SELECT * FROM \`${table}\``))[0];
  },
  async getOne(table, id) {
    return (
      await (
        await conn
      ).execute(`SELECT * FROM \`${table}\` WHERE \`id\`=${id}`)
    )[0];
  },
  async removeOne(table, id) {
    return (
      await (await conn).execute(`DELETE FROM \`${table}\` WHERE \`id\`=${id}`)
    )[0];
  },
  async updateOne(table, id, data) {
    return (
      await (
        await conn
      ).execute(
        `UPDATE \`${table}\` SET ${Object.entries(data)
          .map((el) => `\`${el[0]}\`='${el[1]}'`)
          .join(",")} WHERE \`id\`=${id}`
      )
    )[0];
  },
};

module.exports = databaseQueries;
