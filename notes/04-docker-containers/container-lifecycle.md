# Container Lifecycle

A container moves through predictable states.

## Lifecycle States

- created
- running
- paused
- exited
- removed

## Useful Commands

```bash
docker create nginx
docker start <container_id>
docker pause <container_id>
docker unpause <container_id>
docker stop <container_id>
docker rm <container_id>
```

Understanding lifecycle makes debugging and cleanup easier.
