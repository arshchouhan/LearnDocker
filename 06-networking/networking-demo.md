# Networking Demo

Docker provides isolated networks where containers can communicate by name.

## Create Network

```bash
docker network create app-net
```

## Run Two Containers on Same Network

```bash
docker run -d --name web --network app-net nginx

docker run --rm --network app-net alpine sh -c "apk add --no-cache curl >/dev/null && curl -I http://web"
```

If the second command returns HTTP headers, networking is working.

## Cleanup

```bash
docker stop web
docker rm web
docker network rm app-net
```
