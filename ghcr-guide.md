# GitHub Container Registry (GHCR) Guide

GHCR is a registry provided by GitHub to host and manage container images. It is tightly integrated with GitHub Actions and repository permissions.

## Login to GHCR

You need a Personal Access Token (PAT) with `write:packages` and `read:packages` scopes.

```bash
echo $CR_PAT | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
```

## Tagging and Pushing

To push an image to GHCR, you must tag it with the `ghcr.io` prefix.

```bash
# Build the image
docker build -t my-image .

# Tag for GHCR
docker tag my-image ghcr.io/<OWNER>/my-image:latest

# Push to GHCR
docker push ghcr.io/<OWNER>/my-image:latest
```

## Pulling from GHCR

```bash
docker pull ghcr.io/<OWNER>/my-image:latest
```

## Integration with GitHub Actions

GHCR is the preferred registry for GitHub Actions workflows. You can use the `docker/login-action` to authenticate.

```yaml
- name: Log in to GHCR
  uses: docker/login-action@v2
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
