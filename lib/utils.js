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
  comments,
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
    await this.deleteUnusedTags();
    return await users.destroy({ where: { id } });
  },

  // Collections
  async deleteCollection(id) {
    const collection = await collections.findOne({ where: { id } });
    await this.removeImage(collection.id);
    await this.deleteUnusedTags();
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
  async createItem(body) {
    const result = await items.create({
      name: body.name,
      id_collection: body.id_collection,
    });
    const id = result.dataValues.id;
    if (body.tags.length > 0) {
      await this.addNewTags(body.tags);
      await this.addItemTags(id, body.tags);
    }
    await this.createItemFields(
      id,
      body.fieldsNumber,
      body.fieldsText,
      body.fieldsString,
      body.fieldsDate,
      body.fieldsBoolean
    );
    return result;
  },
  async updateItem(body, params) {
    const itemId = params.id;
    const result = await items.update(
      { name: body.name },
      { where: { id: itemId } }
    );
    await this.deleteItemTags(itemId);
    await this.deleteUnusedTags();
    if (body.tags.length > 0) {
      await this.addNewTags(body.tags);
      await this.addItemTags(itemId, body.tags);
    }
    await this.updateItemFields(
      itemId,
      body.fieldsNumber,
      body.fieldsText,
      body.fieldsString,
      body.fieldsDate,
      body.fieldsBoolean
    );
    return result;
  },
  async findItems(where = {}) {
    const result = await items.findAll({ where });
    const booleans = await itemsFieldsBool.findAll();
    const integers = await itemsFieldsInteger.findAll();
    const strings = await itemsFieldsString.findAll();
    const texts = await itemsFieldsText.findAll();
    const dates = await itemsFieldsDate.findAll();
    const iTags = await itemsTags.findAll();
    const aTags = await tags.findAll();

    return result.map((item) =>
      Object.assign(item.dataValues, {
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
      })
    );
  },

  // Images
  async removeImage(collectionId) {
    const collection = await collections.findOne({
      where: { id: collectionId },
    });
    if (!collection) throw new Error("No collection is found!");
    try {
      await dbx.filesDeleteV2({
        path: `/images/${collection.dataValues.image}`,
      });
    } catch (error) {}
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
  async createItemFields(
    itemId,
    fieldsInteger,
    fieldsText,
    fieldsString,
    fieldsDate,
    fieldsBoolean
  ) {
    await this.createFieldsInteger(itemId, fieldsInteger);
    await this.createFieldsText(itemId, fieldsText);
    await this.createFieldsString(itemId, fieldsString);
    await this.createFieldsDate(itemId, fieldsDate);
    await this.createFieldsBoolean(itemId, fieldsBoolean);
  },
  async createFieldsInteger(id, fieldsNumber) {
    for (let i = 0; i < fieldsNumber.length; i++) {
      await itemsFieldsInteger.create({
        id_item: id,
        title: fieldsNumber[i]?.title,
        value: fieldsNumber[i]?.value || 0,
      });
    }
  },
  async createFieldsText(id, fieldsText) {
    for (let i = 0; i < fieldsText.length; i++) {
      await itemsFieldsText.create({
        id_item: id,
        title: fieldsText[i]?.title,
        value: fieldsText[i]?.value,
      });
    }
  },
  async createFieldsString(id, fieldsString) {
    for (let i = 0; i < fieldsString.length; i++) {
      await itemsFieldsString.create({
        id_item: id,
        title: fieldsString[i]?.title,
        value: fieldsString[i]?.value,
      });
    }
  },
  async createFieldsDate(id, fieldsDate) {
    for (let i = 0; i < fieldsDate.length; i++) {
      await itemsFieldsDate.create({
        id_item: id,
        title: fieldsDate[i]?.title,
        value: fieldsDate[i]?.value || Date.now(),
      });
    }
  },
  async createFieldsBoolean(id, fieldsBoolean) {
    for (let i = 0; i < fieldsBoolean.length; i++) {
      await itemsFieldsBool.create({
        id_item: id,
        title: fieldsBoolean[i]?.title,
        value: fieldsBoolean[i]?.value || 1,
      });
    }
  },
  async deleteItemFields(itemId) {
    await this.deleteItemFieldsInteger(itemId);
    await this.deleteItemFieldsText(itemId);
    await this.deleteItemFieldsString(itemId);
    await this.deleteItemFieldsDate(itemId);
    await this.deleteItemFieldsBoolean(itemId);
  },
  async deleteItemFieldsInteger(id) {
    await itemsFieldsInteger.destroy({ where: { id_item: id } });
  },
  async deleteItemFieldsText(id) {
    await itemsFieldsText.destroy({ where: { id_item: id } });
  },
  async deleteItemFieldsString(id) {
    await itemsFieldsString.destroy({ where: { id_item: id } });
  },
  async deleteItemFieldsDate(id) {
    await itemsFieldsDate.destroy({ where: { id_item: id } });
  },
  async deleteItemFieldsBoolean(id) {
    await itemsFieldsBool.destroy({ where: { id_item: id } });
  },
  async updateItemFields(
    itemId,
    fieldsInteger,
    fieldsText,
    fieldsString,
    fieldsDate,
    fieldsBoolean
  ) {
    await this.deleteItemFields(itemId);
    await this.createItemFields(
      itemId,
      fieldsInteger,
      fieldsText,
      fieldsString,
      fieldsDate,
      fieldsBoolean
    );
  },

  // Tags
  async addItemTags(id, itemTags) {
    const allTags = await tags.findAll();
    for (let i = 0; i < itemTags.length; i++) {
      await itemsTags.create({
        id_item: id,
        id_tag: allTags.find(({ tag }) => tag == itemTags[i]).id,
      });
    }
  },
  async deleteItemTags(itemId) {
    await itemsTags.destroy({ where: { id_item: itemId } });
  },
  async addNewTags(newTags) {
    const allTags = await tags.findAll();
    for (let i = 0; i < newTags.length; i++) {
      const foundTag = allTags?.some(({ tag }) => tag === newTags[i]);
      if (!foundTag || !allTags) await tags.create({ tag: newTags[i] });
    }
  },

  async deleteUnusedTags() {
    const allTags = await tags.findAll();
    const allItemsTags = await itemsTags.findAll();
    for (let i = 0; i < allTags.length; i++) {
      const foundTag = allItemsTags?.some(
        ({ id_tag }) => id_tag === allTags[i].id
      );
      if (!foundTag) await tags.destroy({ where: { id: allTags[i].id } });
    }
  },

  // Comments
  async getItemComments(id) {
    const itemComments = await comments.findAll({ where: { id_item: id } });
    const allUsers = await users.findAll();
    return itemComments.map((comment) => {
      const user = allUsers.filter(
        (user) => user.dataValues.id == comment.dataValues.id_user
      )[0];
      return Object.assign(comment.dataValues, {
        user: {
          name: user.name,
        },
      });
    });
  },
};

module.exports = utils;
