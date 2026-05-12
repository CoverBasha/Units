const Kafka = require("kafkajs").Kafka;
require("dotenv").config();

const kafka = new Kafka({
  clientId: "items-consumer",
  brokers: [process.env.KAFKA_BROKER]
});

const consumer = kafka.consumer({
  groupId: "items-group"
});

async function runConsumer() {
  await consumer.connect();

  await consumer.subscribe({
    topic: "item-created",
    fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(
        "Received:",
        message.value.toString()
      );
    }
  });
}

module.exports = runConsumer;