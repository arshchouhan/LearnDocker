# Pulling Docker Images

Images are read-only templates used to create containers.

## Pull an Image

```bash
docker pull nginx
docker pull mongo
```

## Check Downloaded Images

```bash
docker images
```

## Useful Tips

- Use explicit tags for reproducible setups, for example `nginx:1.27-alpine`.
- Latest tags are convenient for learning but can change over time.
