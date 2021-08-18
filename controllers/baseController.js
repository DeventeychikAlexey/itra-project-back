const { dbQueries } = require("../lib");

const baseController = {
  async getCollections(req, res) {
    try {
      const result = await dbQueries.getAll("users_collections_view");
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async getItems(req, res) {
    try {
      const items = await dbQueries.getAll("collections_items_view");
      const checkboxes = await dbQueries.getAll("items_fields-checkbox");
      const dates = await dbQueries.getAll("items_fields-date");
      const integers = await dbQueries.getAll("items_fields-integer");
      const strings = await dbQueries.getAll("items_fields-string");
      const texts = await dbQueries.getAll("items_fields-text");
      res
        .status(200)
        .send({ msg: { items, checkboxes, dates, integers, strings, texts } });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = baseController;
