const Sequelize = require("sequelize");
const tables = require("./tables");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    define: {
      timestamps: false,
    },
  }
);

const users = tables.Users(sequelize);
const comments = tables.Comments(sequelize);
const items = tables.Items(sequelize);
const itemsFieldsBool = tables.ItemsFieldsBool(sequelize);
const itemsFieldsDate = tables.ItemsFieldsDate(sequelize);
const itemsFieldsInteger = tables.ItemsFieldsInteger(sequelize);
const itemsFieldsString = tables.ItemsFieldsString(sequelize);
const itemsFieldsText = tables.ItemsFieldsText(sequelize);
const itemsTags = tables.ItemsTags(sequelize);
const likesUsersItems = tables.LikesUsersItems(sequelize);
const rights = tables.Rights(sequelize);
const tags = tables.Tags(sequelize);
const topics = tables.Topics(sequelize);
const collections = tables.Collections(sequelize);

module.exports = {
  sequelize,
  users,
  comments,
  items,
  itemsFieldsBool,
  itemsFieldsDate,
  itemsFieldsInteger,
  itemsFieldsString,
  itemsFieldsText,
  itemsTags,
  likesUsersItems,
  rights,
  tags,
  topics,
  collections,
};
