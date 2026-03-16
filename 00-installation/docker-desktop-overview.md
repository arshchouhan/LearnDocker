# Docker Desktop Overview

Docker Desktop is the easiest way to run Docker on Windows and Mac.

## What You Get

- Docker Engine
- Docker CLI
- Docker Compose
- GUI dashboard for containers, images, volumes, and logs

## Main Sections in Docker Desktop

- Containers: Start, stop, inspect, and view logs
- Images: See downloaded or built images
- Volumes: Manage persisted data
- Extensions: Add productivity tools

## Recommended First Settings

- Turn on "Start Docker Desktop when you log in"
- Enable WSL integration for your distro
- Keep Docker Desktop updated

## Quick Verification Workflow

1. Open Docker Desktop
2. Wait until status is "Engine running"
3. Run:

```bash
docker run hello-world
```

If it prints the hello message, your environment is ready.
