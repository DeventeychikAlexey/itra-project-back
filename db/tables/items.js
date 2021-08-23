const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "items",
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
      id_collection: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "collections",
          key: "id",
        },
        onDelete: "cascade",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timeStamps: true,
      tableName: "items",
    }
  );
};
