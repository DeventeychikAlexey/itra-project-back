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
  collections,
} = require("../db");

const utils = {
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
  async deleteUser(id, rights) {
    const user = await users.findOne({ where: { id } });
    if (!user) throw new Error("No one is found!");
    if (rights.every((right) => user.dataValues.id_right != right))
      throw new Error("You can not delete him!");
    return await users.destroy({ where: { id } });
  },
  async deleteCollection(id, rights) {
    const collection = await collections.findOne({ where: { id } });
    if (!collection) throw new Error("Nothing is found!");
    const user = await users.findOne({
      where: { id: collection.dataValues.id_user },
    });
    if (rights.some((right) => user.dataValues.id_right == right))
      throw new Error("You can not change it!");

    return await collections.destroy({ where: { id } });
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
  getUserAndRight(user, rights) {
    rights.forEach((right) => {
      if (user.dataValues.id_right == right.dataValues.id)
        user.dataValues.right = right.dataValues;
    });
    return user;
  },
};

module.exports = utils;
