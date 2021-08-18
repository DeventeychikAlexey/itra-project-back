const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "items_tags",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_tag: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tags",
          key: "id",
        },
        onDelete: "cascade",
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
      tableName: "items_tags",
    }
  );
};
