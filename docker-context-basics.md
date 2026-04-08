# Docker Context Basics

Docker context lets you switch the Docker endpoint used by CLI commands.

A context can point to:
- Local Docker Desktop engine
- Remote Docker Engine over SSH
- Other configured endpoints

## Why it is useful

- Avoid changing `DOCKER_HOST` manually
- Manage local and remote environments safely
- Switch targets with one command

## Check Current and Available Contexts

```bash
docker context ls
docker context show
```

- `docker context ls` lists all contexts.
- `docker context show` prints the active context.

## Switch Context

```bash
docker context use default
```

Replace `default` with another context name.

## Create a Remote Context (SSH)

```bash
docker context create prod --docker "host=ssh://user@192.168.1.10"
```

This creates a context named `prod` that connects to a remote host over SSH.

## Inspect a Context

```bash
docker context inspect prod
```

Use this to verify endpoint and metadata.

## Remove a Context

```bash
docker context rm prod
```

You cannot remove the context currently in use.

## Safe Workflow Tip

Before running risky commands, confirm target context:

```bash
docker context show
```

This prevents accidental changes on the wrong Docker host.
