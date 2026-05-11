class GetAll
{
    constructor(ItemRepository)
    {
        this.ItemRepository = ItemRepository;
    }

    async execute()
    {
        return await this.ItemRepository.findAll();
    }
}

module.exports = GetAll;