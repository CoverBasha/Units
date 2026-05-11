const Kafka = require("kafkajs").Kafka;

const kafka = new Kafka({
    clientId: "items-service",
    brokers: ["localhost:9092"]
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