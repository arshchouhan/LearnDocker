# Changelog

All notable updates to this Docker learning repository are recorded here.

## 2026-05-03

- Finalized repository organization and updated `README.md` with links to all new guides.
- Added comprehensive documentation on Docker Networking, Volumes, Registries (GHCR/Docker Hub), and Swarm Orchestration.

## 2026-04-26

- Documented Docker Swarm service types (Replicated vs Global).
- Added `commands/swarm-commands.md` as a quick CLI reference for Swarm management.
- Included guide on performing rolling updates and rollbacks in Swarm.

## 2026-04-22

- Added `ghcr-guide.md` covering GitHub Container Registry usage and login.
- Updated `docker-hub.md` with instructions for tagging and pushing custom images.
- Documented login procedures for both registries.

## 2026-04-20

- Integrated `projects/IBMCodeengienPRoject` - a comprehensive DevOps capstone project.
- Features microservices architecture containerized with Docker.
- Includes deployment configurations for IBM Cloud Code Engine and automated CI/CD workflows.

## 2026-04-15

- Updated `networking-demo.md` with details on DNS resolution in user-defined networks.
- Added examples for communicating between containers using container names.

## 2026-04-14

- Introduced Multi-stage builds in `dockerfiles/multistage.Dockerfile`.
- Demonstrated how to reduce image size by separating build and runtime environments.

## 2026-04-13

- Integrated `projects/Pyhton CICd Project` - a Flask-based application with a complete CI/CD pipeline.
- Configured GitHub Actions and Tekton pipelines for automated testing and deployment.
- Added Dockerfile for containerizing the Python application.

## 2026-04-12

- Expanded `volume-demo.md` with advanced backup and restore strategies for Docker Volumes.
- Added documentation on anonymous vs. named volumes.

## 2026-03-26

- Added `notes/04-docker-containers/environment-variables-and-interactive-shells.md` with practical command notes on `-e`, PowerShell `$VAR` expansion behavior, `-it` usage, and `docker run` vs `docker start`.

## 2026-03-24

- Added `notes/08-docker-context/docker-context-basics.md` covering Docker context concepts and core commands.

## 2026-03-20

- Expanded `dockerfiles/simple-dockerfile/README.md` with a complete Dockerfile study guide.
- Added `commands/dockerfile-commands.md` for Dockerfile and image build command reference.
- Added `notes/07-dockerfiles/dockerfile-basics.md` with Dockerfile concepts, workflow, and best practices.

## 2026-03-19

- Added `projects/node-mongo-users-api` as a basic Node.js app that connects to MongoDB.
- Implemented API endpoint `GET /api/users` to fetch all users from database `arsh`.
- Added a simple browser page at `/` to trigger and view API results.

## 2026-03-18

- Reorganized repository into learning-focused folders:
  - `notes/`
  - `dockerfiles/`
  - `compose-projects/`
  - `commands/`
  - `troubleshooting/`
  - `projects/`
- Moved existing lessons and examples into the new structure without changing their core content.
- Added `projects/compose-demo-app` as a working containerized sample project.
- Renamed root `readme.md` to `README.md`.
- Updated internal relative links affected by folder moves.
