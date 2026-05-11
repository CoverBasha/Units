const express = require("express");
const router = express.Router();

const MongoItemRepository = require("../../Infrastructure/Database/MongoItemRepository");
const repository = new MongoItemRepository();

const CreateItem = require("../../Application/Item/CreateItem");
const ListItems = require("../../Application/Item/GetAll");
const GetById = require("../../Application/Item/GetById");
const createItem = new CreateItem(repository);
const listItems = new ListItems(repository);
const getById = new GetById(repository);

const itemsController = require("./ItemController");
const controller = new itemsController(createItem,listItems,getById);

router.post("/",controller.create);
router.get("/",controller.list);
router.get("/:id",controller.itemById);

module.exports = router;