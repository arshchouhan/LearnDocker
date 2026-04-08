# Dockerfile Basics

Dockerfile defines how to build a Docker image step by step.

## Why Dockerfile Matters

- Creates repeatable build process
- Makes deployments consistent across systems
- Helps automate app packaging

## Common Instructions

- `FROM` picks the base image
- `WORKDIR` sets the app folder
- `COPY` moves files into image
- `RUN` executes build commands
- `ENV` sets environment variables
- `EXPOSE` documents container port
- `CMD` sets default startup command
- `ENTRYPOINT` defines main executable

## Basic Build Workflow

```bash
docker build -t my-app:1.0 .
docker run -p 3000:3000 my-app:1.0
```

## Best Practices

- Use small base images like `alpine` when possible
- Pin image tags instead of relying on `latest`
- Copy dependency files first for better layer caching
- Use `.dockerignore` to reduce build context size
- Prefer non-root users for runtime security
