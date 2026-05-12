const Kafka = require("kafkajs").Kafka;
require("dotenv").config();

const kafka = new Kafka({
    clientId: "items-service",
    brokers: [process.env.KAFKA_BROKER]
});

const producer = kafka.producer();

const publishItemCreated = async (item) => {
    await producer.connect();
    await producer.send({
        topic: "item-created",
        messages: [
            { value: JSON.stringify(item) }
        ]
    });
};

module.exports = publishItemCreated;