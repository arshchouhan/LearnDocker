# Docker Swarm CLI Reference

A quick reference for the most common Docker Swarm commands.

## Swarm Management
- `docker swarm init`: Initialize a swarm.
- `docker swarm join`: Join a swarm as a node.
- `docker swarm leave`: Leave a swarm.
- `docker swarm update`: Update the swarm.
- `docker swarm join-token`: Manage join tokens.

## Node Management
- `docker node ls`: List nodes in the swarm.
- `docker node ps`: List tasks running on one or more nodes.
- `docker node inspect`: Display detailed information on one or more nodes.
- `docker node update`: Update a node.
- `docker node promote`: Promote one or more nodes to manager.
- `docker node demote`: Demote one or more nodes from manager.

## Service Management
- `docker service create`: Create a new service.
- `docker service ls`: List services.
- `docker service ps`: List the tasks of one or more services.
- `docker service inspect`: Display detailed information on one or more services.
- `docker service update`: Update a service.
- `docker service scale`: Scale one or more replicated services.
- `docker service rollback`: Roll back a service to its previous version.
- `docker service rm`: Remove one or more services.
- `docker service logs`: Fetch the logs of a service or task.

## Stack Management (Docker Compose in Swarm)
- `docker stack deploy`: Deploy a new stack or update an existing one.
- `docker stack ls`: List stacks.
- `docker stack ps`: List the tasks in the stack.
- `docker stack services`: List the services in the stack.
- `docker stack rm`: Remove one or more stacks.
