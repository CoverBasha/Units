const ItemRepository = require("../../Domain/Item/ItemRepository");
const ItemModel = require("../Database/ItemModel");

class MongoItemRepository extends ItemRepository {
  async create(itemData) {
    return await ItemModel.create(itemData);
  }

  async findById(id) {
    return await ItemModel.findById(id);
  }

  async findAll() {
    return await ItemModel.find();
  }
}

module.exports = MongoItemRepository;