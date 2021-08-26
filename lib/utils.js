const {
  users,
  items,
  itemsFieldsBool,
  itemsFieldsInteger,
  itemsFieldsString,
  itemsFieldsText,
  itemsFieldsDate,
  itemsTags,
  tags,
  topics,
  collections,
  rights,
} = require("../db");

const { dbx } = require("../config/dropbox");

const utils = {
  // Users
  async toggleBlocked(id, rights) {
    const user = await users.findOne({ where: { id } });
    if (!user) throw new Error("No one is found");
    if (rights.every((right) => user.dataValues.id_right != right))
      throw new Error("You can not change his rights");
    return await users.update(
      { blocked: user.dataValues.blocked ? 0 : 1 },
      { where: { id } }
    );
  },
  async findUsers(where = {}) {
    const result = await users.findAll({ where });
    const allRights = await rights.findAll();

    return await result.map((user) => {
      delete user.dataValues.login;
      delete user.dataValues.password;
      return Object.assign(user.dataValues, {
        right: allRights.filter((right) => user.id_right == right.id)[0],
      });
    });
  },
  async deleteUser(id, rights) {
    const user = await users.findOne({ where: { id } });
    if (!user) throw new Error("No one is found!");
    if (rights.every((right) => user.dataValues.id_right != right))
      throw new Error("You can not delete him!");
    const userCollections = await collections.findAll({
      where: { id_user: id },
    });
    for (let i = 0; i < userCollections.length; i++) {
      await this.removeImage(userCollections[i].id);
    }
    return await users.destroy({ where: { id } });
  },

  // Collections
  async deleteCollection(id) {
    const collection = await collections.findOne({ where: { id } });
    await this.removeImage(collection.id);
    return await collections.destroy({ where: { id } });
  },
  async findCollections(where = {}) {
    const result = await collections.findAll({ where });
    const allTopics = await topics.findAll();

    return await result.map((collection) => {
      return Object.assign(collection.dataValues, {
        topic: allTopics.filter((topic) => collection.id_topic == topic.id)[0],
      });
    });
  },

  // Items
  async findItems(where = {}) {
    const result = await items.findAll({ where });
    const booleans = await itemsFieldsBool.findAll();
    const integers = await itemsFieldsInteger.findAll();
    const strings = await itemsFieldsString.findAll();
    const texts = await itemsFieldsText.findAll();
    const dates = await itemsFieldsDate.findAll();
    const iTags = await itemsTags.findAll();
    const aTags = await tags.findAll();

    return await result.map((item) => {
      return Object.assign(item.dataValues, {
        fieldsBoolean: booleans.filter((field) => field.id_item == item.id),
        fieldsInteger: integers.filter((field) => field.id_item == item.id),
        fieldsString: strings.filter((field) => field.id_item == item.id),
        fieldsText: texts.filter((field) => field.id_item == item.id),
        fieldsDate: dates.filter((field) => field.id_item == item.id),
        tags: aTags.filter((t) =>
          iTags
            .filter((tag) => tag.id_item == item.id)
            .some((tag) => tag.id_tag === t.id)
        ),
      });
    });
  },

  // Images
  async removeImage(collectionId) {
    const collection = await collections.findOne({
      where: { id: collectionId },
    });
    if (!collection) throw new Error("No collection is found!");
    const result = await dbx.filesDeleteV2({
      path: `/images/${collection.dataValues.image}`,
    });
    return result;
  },
  async downloadImage(collectionId) {
    const collection = await collections.findOne({
      where: { id: collectionId },
    });
    if (!collection) throw new Error("No collection is found!");
    const result = await dbx.filesDownload({
      path: `/images/${collection.dataValues.image}`,
    });
    return result;
  },

  // item fields
  async createFieldsInteger(id, fieldsNumber) {
    for (let i = 0; i < fieldsNumber.length; i++) {
      await itemsFieldsInteger.create({
        id_item: id,
        title: fieldsNumber[i].title,
        value: fieldsNumber[i].value,
      });
    }
  },
  async createFieldsText(id, fieldsText) {
    for (let i = 0; i < fieldsText.length; i++) {
      await itemsFieldsText.create({
        id_item: id,
        title: fieldsText[i].title,
        value: fieldsText[i].value,
      });
    }
  },
  async createFieldsString(id, fieldsString) {
    for (let i = 0; i < fieldsString.length; i++) {
      await itemsFieldsString.create({
        id_item: id,
        title: fieldsString[i].title,
        value: fieldsString[i].value,
      });
    }
  },
  async createFieldsDate(id, fieldsDate) {
    for (let i = 0; i < fieldsDate.length; i++) {
      await itemsFieldsDate.create({
        id_item: id,
        title: fieldsDate[i].title,
        value: fieldsDate[i].value,
      });
    }
  },
  async createFieldsBoolean(id, fieldsBoolean) {
    for (let i = 0; i < fieldsBoolean.length; i++) {
      await itemsFieldsBool.create({
        id_item: id,
        title: fieldsBoolean[i].title,
        value: fieldsBoolean[i].value,
      });
    }
  },
};

module.exports = utils;
