import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myDatabase';

async function main() {
const client = new MongoClient(url);

try {
await client.connect();
console.log("Connected successfully to server");

const db = client.db(dbName);
const collection = db.collection('documents');

const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents:', insertResult.insertedCount);

const findResult = await collection.find({}).toArray();
console.log('Found documents:', findResult);
} catch (err) {
console.error("An error occurred:", err);
} finally {
await client.close();
}
}

main().catch(console.error);