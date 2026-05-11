const Item = require("../../Domain/Item/Item");
const publishItemCreated = require("../../Infrastructure/Kafka/Publisher");
class CreateItem
{
    constructor(ItemRepository)
    {
        this.ItemRepository = ItemRepository;
    }

    async execute(data)
    {
        const item = new Item(data.name,data.stock);
        await publishItemCreated(item);
        return await this.ItemRepository.create(item);
    }
}

module.exports = CreateItem;