const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;
const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || "27017";
const mongoUser = process.env.MONGO_USER || "arsh";
const mongoPass = process.env.MONGO_PASS || "arsh";
const dbName = process.env.MONGO_DB_NAME || "arsh";
const collectionName = process.env.MONGO_COLLECTION || "users";
const mongoUri =
  process.env.MONGO_URI ||
  `mongodb://${encodeURIComponent(mongoUser)}:${encodeURIComponent(
    mongoPass
  )}@${mongoHost}:${mongoPort}/${dbName}?authSource=admin`;
let client = null;
let usersCollection = null;

function isMongoAuthError(error) {
  return (
    error &&
    (error.codeName === "Unauthorized" ||
      /requires authentication|not authorized/i.test(error.message))
  );
}

async function connectToMongo() {
  client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    usersCollection = db.collection(collectionName);

    // Verify read access early so auth issues are visible at startup.
    await usersCollection.findOne({}, { projection: { _id: 1 } });
    console.log(`MongoDB read access verified for ${dbName}.${collectionName}`);
  } catch (error) {
    if (isMongoAuthError(error)) {
      console.error(
        "MongoDB authentication failed. Set MONGO_URI with username/password and authSource if needed."
      );
    } else {
      console.error("Could not connect to MongoDB:", error.message);
    }

    usersCollection = null;
  }
}

app.get("/api/users", async (req, res) => {
  if (!usersCollection) {
    return res.status(503).json({ error: "Database is not connected" });
  }

  try {
    const users = await usersCollection.find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error("Failed to fetch users:", error.message);

    if (isMongoAuthError(error)) {
      return res.status(401).json({
        error: "MongoDB authentication failed",
        hint: "Set MONGO_URI with credentials, e.g. mongodb://user:pass@localhost:27017/arsh?authSource=admin",
      });
    }

    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Users API Demo</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    pre { background: #f4f4f4; padding: 1rem; border-radius: 8px; overflow: auto; }
    button { padding: 0.5rem 1rem; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Users from MongoDB (${dbName})</h1>
  <p>Click to fetch users from <code>/api/users</code>.</p>
  <button id="loadBtn">Load Users</button>
  <pre id="output">[]</pre>

  <script>
    const output = document.getElementById("output");
    const loadBtn = document.getElementById("loadBtn");

    async function loadUsers() {
      output.textContent = "Loading...";
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
      } catch (error) {
        output.textContent = "Failed to load users";
      }
    }

    loadBtn.addEventListener("click", loadUsers);
  </script>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on("SIGINT", async () => {
  if (client) {
    try {
      await client.close();
    } catch (error) {
      console.error("Failed to close MongoDB client:", error.message);
    }
  }

  process.exit(0);
});

connectToMongo();
