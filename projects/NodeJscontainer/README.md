# NodeJscontainer

Project 2: A simple Node.js + Express app prepared to run in Docker.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start app:
   ```bash
   npm start
   ```
3. Open:
   - `http://localhost:3000/`
   - `http://localhost:3000/health`

## Build Docker image

```bash
docker build -t nodejscontainer:1.0 .
```

## Run Docker container

```bash
docker run -d -p 3000:3000 --name nodejscontainer-app nodejscontainer:1.0
```

## Stop and remove container

```bash
docker stop nodejscontainer-app
docker rm nodejscontainer-app
```
