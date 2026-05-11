class GetById
{
    constructor(ItemRepository)
    {
        this.ItemRepository = ItemRepository;
    }

    async execute(data)
    {
        return await this.ItemRepository.findById(data);
    }
}

module.exports = GetById;