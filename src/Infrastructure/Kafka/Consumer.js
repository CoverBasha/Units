const Kafka = require("kafkajs").Kafka;

const kafka = new Kafka({
  clientId: "items-consumer",
  brokers: ["localhost:9092"]
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