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
