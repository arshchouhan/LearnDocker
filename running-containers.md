# Running Containers

Containers are created from images and execute a command.

## Start a Container

```bash
docker run -d --name web -p 8080:80 nginx
```

## Inspect Running Containers

```bash
docker ps
```

## View Logs

```bash
docker logs web
```

## Stop and Remove

```bash
docker stop web
docker rm web
```
## Resource Constraints (CPU and Memory)

By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows. You can set limits using flags.

### Memory Limits
- `--memory` (or `-m`): Maximum amount of memory the container can use.
- `--memory-reservation`: Soft limit; guaranteed memory.

```bash
docker run -d --name limited-web -m 512m --memory-reservation 256m nginx
```

### CPU Limits
- `--cpus`: Number of CPUs the container can use.

```bash
docker run -d --name cpu-limited --cpus="0.5" nginx
```

Use `docker stats` to monitor resource usage in real-time.
