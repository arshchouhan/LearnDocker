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

## Pushing to Docker Hub

1. Log in to your account:
   ```bash
   docker login
   ```

2. Tag your local image:
   ```bash
   docker tag my-image <YOUR_USERNAME>/my-image:v1
   ```

3. Push the image:
   ```bash
   docker push <YOUR_USERNAME>/my-image:v1
   ```

## Private Repositories

Docker Hub allows one free private repository. For more, a paid plan is required.
