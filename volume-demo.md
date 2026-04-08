# Docker Volumes

## Problem Statement

It is a very common requirement to persist data in a Docker container beyond the lifetime of the container. However, the file system of a Docker container is deleted when the container dies.

## Solution

There are two common ways Docker solves this problem:

1. Volumes
2. Bind directory on a host as a mount

## Volumes

Volumes store data on the host file system outside the container file system, so data can persist even if the container is deleted and recreated.

![Docker volume types](https://user-images.githubusercontent.com/43399466/218018334-286d8949-d155-4d55-80bc-24827b02f9b1.png)

Volumes can be created and managed using the `docker volume` command.

```bash
docker volume create <volume_name>
```

Once created, mount the volume to a container using `-v` or `--mount`:

```bash
docker run -it -v <volume_name>:/data <image_name> /bin/bash
```

Any data written to `/data` inside the container is persisted in the volume on the host.

## Bind Directory on a Host as a Mount

Bind mounts solve the same persistence problem differently. You mount an existing host directory directly into the container.

```bash
docker run -it -v <host_path>:<container_path> <image_name> /bin/bash
```

## Key Differences: Volumes vs Bind Mounts

Volumes are managed by Docker (created, mounted, listed, deleted via Docker API/CLI).

Bind mounts are managed by the host file system path you choose.

In general:

- Use bind mounts for simple local development use cases.
- Use volumes when you want cleaner lifecycle management, portability, and easier backup strategies.

## Quick Demo

Create a volume and write logs into it from a running container:

```bash
docker volume create mydata
docker run -d --name vol-demo -v mydata:/data alpine sh -c "while true; do date >> /data/log.txt; sleep 5; done"
```

Verify data is being written:

```bash
docker exec vol-demo sh -c "tail -n 5 /data/log.txt"
```

Cleanup container (volume remains):

```bash
docker stop vol-demo
docker rm vol-demo
docker volume ls
```
