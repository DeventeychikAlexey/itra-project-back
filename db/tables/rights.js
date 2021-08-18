const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "rights",
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
      tableName: "rights",
    }
  );
};
