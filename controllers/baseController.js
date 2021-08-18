const {
  collections,
  items,
  itemsFieldsBool,
  itemsFieldsInteger,
  itemsFieldsString,
  itemsFieldsText,
  itemsFieldsDate,
  itemsTags,
  tags,
  topics,
  users,
} = require("../db");

const baseController = {
  async getCollections(req, res) {
    try {
      const result = await collections.findAll();
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getItems(req, res) {
    try {
      let result = await items.findAll();
      const booleans = await itemsFieldsBool.findAll();
      const integers = await itemsFieldsInteger.findAll();
      const strings = await itemsFieldsString.findAll();
      const texts = await itemsFieldsText.findAll();
      const dates = await itemsFieldsDate.findAll();
      const iTags = await itemsTags.findAll();
      const aTags = await tags.findAll();

      result = result.map((item) =>
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
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getUsers(req, res) {
    try {
      let result = await users.findAll();
      result.forEach((el) => {
        delete el.dataValues.login;
        delete el.dataValues.password;
      });
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getTags(req, res) {
    try {
      let result = await tags.findAll();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getTopics(req, res) {
    try {
      let result = await topics.findAll();
      res.status(200).send({
        msg: result,
      });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = baseController;
