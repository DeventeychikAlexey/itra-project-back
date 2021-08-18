const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "tags",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tag: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "tags",
    }
  );
};
