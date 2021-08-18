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
  async getAll(table, conditions, strict = true) {
    return (
      await (
        await conn
      ).execute(
        `SELECT * FROM \`${table}\` WHERE ${
          typeof conditions == "object" && Object.entries(conditions).length > 0
            ? Object.entries(conditions)
                .map((condition) => `\`${condition[0]}\`='${condition[1]}'`)
                .join(`${strict ? " AND " : " OR "}`)
            : 1
        }`
      )
    )[0];
  },
  async getOne(table, conditions, strict = true) {
    return (
      await (
        await conn
      ).execute(
        `SELECT * FROM \`${table}\` WHERE ${Object.entries(conditions)
          .map((condition) => `\`${condition[0]}\`='${condition[1]}'`)
          .join(`${strict ? " AND " : " OR "}`)}`
      )
    )[0][0];
  },
  async removeOne(table, conditions, strict = true) {
    return (
      await (
        await conn
      ).execute(
        `DELETE FROM \`${table}\` WHERE ${Object.entries(conditions)
          .map((condition) => `\`${condition[0]}\`='${condition[1]}'`)
          .join(`${strict ? " AND " : " OR "}`)}`
      )
    )[0];
  },
  async updateOne(table, data, conditions, strict = true) {
    return (
      await (
        await conn
      ).execute(
        `UPDATE \`${table}\` SET ${Object.entries(data)
          .map((el) => `\`${el[0]}\`='${el[1]}'`)
          .join(",")} WHERE ${Object.entries(conditions)
          .map((condition) => `\`${condition[0]}\`='${condition[1]}'`)
          .join(`${strict ? " AND " : " OR "}`)}`
      )
    )[0];
  },
};

module.exports = databaseQueries;
