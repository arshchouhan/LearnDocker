# Volumes Demo

Volumes persist data outside the container filesystem.

## Why Volumes

Container files are lost when containers are removed. Volumes keep data safe.

## Create and Use a Volume

```bash
docker volume create mydata
docker run -d --name vol-demo -v mydata:/data alpine sh -c "while true; do date >> /data/log.txt; sleep 5; done"
```

## Verify Data

```bash
docker exec vol-demo sh -c "tail -n 5 /data/log.txt"
```

## Cleanup

```bash
docker stop vol-demo
docker rm vol-demo
docker volume ls
```
