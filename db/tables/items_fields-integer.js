const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "items_fields-integer",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "items",
          key: "id",
        },
        onDelete: "cascade",
      },
    },
    {
      tableName: "items_fields-integer",
    }
  );
};
