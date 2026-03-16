# First Container: hello-world

## What Is a Container?

A container is a lightweight, isolated runtime created from an image.

## Run Your First Container

```bash
docker run hello-world
```

## What Happens Internally

```text
docker run
   ->
pull image if not present
   ->
create container
   ->
execute command
   ->
stop container
```

The `hello-world` container exits after printing a confirmation message.

## Why This Matters

This first run teaches the core Docker workflow:

- image retrieval
- container creation
- process execution
- container exit lifecycle
