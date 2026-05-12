require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;
const connectDB = require("./Infrastructure/Database/Mongo");
const runConsumer = require("./Infrastructure/Kafka/Consumer");

async function startServer() {
  await connectDB();
  await runConsumer();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();