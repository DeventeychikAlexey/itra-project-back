const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      login: {
        type: Sequelize.TEXT,
      },
      password: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_right: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "rights",
          key: "id",
        },
        onDelete: "cascade",
      },
      id_google: {
        type: Sequelize.TEXT,
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timeStamps: true,
      tableName: "users",
    }
  );
};
