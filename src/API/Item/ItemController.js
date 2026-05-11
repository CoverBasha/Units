class ItemController
{
    constructor(createItem,getItems,getItemById)
    {
        this.createItem = createItem;
        this.getItemById = getItemById;
        this.getItems = getItems;
    }

    create = async(req,res)=>{
        let item;
        try
        {
            item = await this.createItem.execute(req.body);
        }
        catch(error)
        {
            return res.status(500).json({message:"Error creating item",error:error.message});
        }
        res.status(201).json(item);
    };

    list = async (req,res)=>{
        const items = await this.getItems.execute();
        res.status(200).json(items);
    }

    itemById = async(req,res)=>{
        const item = await this.getItemById.execute(req.params.id);
        item ? res.status(200).json(item) : res.status(404).json({message:"Item not found"});
    }
}

module.exports = ItemController;