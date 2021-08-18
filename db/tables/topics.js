const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "topics",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "topics",
    }
  );
};
