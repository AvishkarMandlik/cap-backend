const {MongoClient} = require("mongodb");

require("dotenv").config();
const client = new MongoClient(process.env.MONGODB_URL);

// Database Name
const dbName = 'TestCollege';

async function connect() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  return db;
}

async function disconnect() {
    client.close();
}

module.exports = {connect,disconnect}