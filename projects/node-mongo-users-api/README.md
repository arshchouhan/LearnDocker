# Node Mongo Users API

Basic Node.js app that connects to MongoDB and fetches all users from database `arsh`.

## API

- `GET /api/users` -> Returns all documents from `arsh.users`
- `GET /` -> Simple browser page with a button to fetch users

## Run

1. Open terminal in this folder.
2. Install packages:

```bash
npm install
```

3. Set Mongo URI and start app:

```bash
npm start
```

Default connection now uses:

```text
mongodb://arsh:arsh@localhost:27017/arsh?authSource=admin
```

If you want to override credentials/host without setting full URI:

```bash
set MONGO_USER=<username>
set MONGO_PASS=<password>
set MONGO_HOST=localhost
set MONGO_PORT=27017
npm start
```

Or set the full URI directly:

```bash
set MONGO_URI=mongodb://<username>:<password>@localhost:27017/arsh?authSource=admin
npm start
```

Optional environment variables:

- `MONGO_DB_NAME` (default: `arsh`)
- `MONGO_COLLECTION` (default: `users`)

Then open `http://localhost:3000`.

## If MongoDB is inside Docker

Use the URI that can reach your MongoDB container.

Examples:

- If MongoDB port is published to host: `mongodb://localhost:27017`
- If app runs in another container on same network: `mongodb://mongo:27017`
- If MongoDB auth is enabled: `mongodb://<username>:<password>@mongo:27017/arsh?authSource=admin`
