const { MongoClient } = require("mongodb");
const { DB_USER, DB_PASS, DB_CLUSTER } = process.env;

async function main() {
  const uri =
    "mongodb+srv://bento:610924@movies-api.qnlcg.gcp.mongodb.net/movies-api?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
