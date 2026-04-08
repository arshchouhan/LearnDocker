# Docker Hub Basics

Docker Hub is a public registry where Docker images are hosted.

## Key Ideas

- Repositories contain images and tags
- Tags represent versions or variants
- Official images are maintained and verified by Docker and partners

## Typical Flow

1. Search an image on Docker Hub
2. Pull using `docker pull <name>:<tag>`
3. Run with `docker run`

## Examples

```bash
docker pull nginx
docker pull mongo:7
```
