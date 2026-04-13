# 🚀 CI/CD Flask REST API Service

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20225616.png" alt="CI/CD Project Header" width="100%"/>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/Python-3.9+-blue?style=flat-square&logo=python" alt="Python"/>
   <img src="https://img.shields.io/badge/Flask-Web%20Framework-lightgrey?style=flat-square&logo=flask" alt="Flask"/>
   <img src="https://img.shields.io/badge/Docker-Containerization-blue?style=flat-square&logo=docker" alt="Docker"/>
   <img src="https://img.shields.io/badge/Tekton-CI%2FCD%20Pipelines-orange?style=flat-square&logo=tekton" alt="Tekton"/>
   <img src="https://img.shields.io/badge/IBM%20Cloud-Code%20Engine-blue?style=flat-square&logo=ibm" alt="IBM Cloud"/>
</p>

---

## 📖 Overview

Developed a **production-ready Flask-based REST API service** implementing CRUD operations for counter resources. This project demonstrates advanced backend engineering, modular design, and a scalable cloud-native architecture.

### 🌟 Key Highlights

- **Backend Excellence**: Built a modular REST API with Flask, supporting full CRUD (Create, Read, Update, Delete) cycles for distributed counter management.
- **Automated CI/CD**: Integrated complex workflows using **Docker**, **Gunicorn**, and **Tekton pipelines** to automate the build and deployment process.
- **Robust Testing**: Comprehensive unit testing suite with **10+ test scenarios** covering health checks, routing logic, CRUD flows, and defensive error handling.
- **Efficient Deployment**: Delivered a containerized pipeline that **reduces manual release effort by 80%**, leveraging structured logging and production-grade API lifecycle management.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core** | Python, Flask, Gunicorn |
| **DevOps** | Docker, Tekton, CI/CD Pipelines |
| **Testing** | Pytest, Unit Testing |
| **Cloud** | IBM Cloud, IBM Code Engine, IBM Container Registry |

---

## 📸 Deployment & Pipeline Walkthrough

The following screenshots illustrate the automated deployment process and the final production environment on IBM Cloud.

### 🔹 Infrastructure & Registry Setup
Configuring the IBM Cloud environment and ensuring secure access to the container registry.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20222211.png" alt="Cloud Shell Setup" width="48%"/>
   <img src="assets/Screenshot%202026-03-23%20222539.png" alt="Registry Login" width="48%"/>
</p>

### 🔹 Containerized Orchestration
Deploying the microservices using IBM Code Engine and monitoring the rollout.

<p align="center">
   <img src="assets/Screenshot%202026-03-23%20223937.png" alt="Application List" width="100%"/>
</p>


---

## 🚀 Getting Started

### Prerequisites

- **Python 3.9+**
- **Docker**
- **IBM Cloud CLI** with Code Engine plugin

### Installation & Setup

1. **Run the setup script**:
   ```bash
   bash bin/setup.sh
   ```

2. **Activate the environment**:
   ```bash
   exit
   # (Open a new terminal to auto-activate the virtual environment)
   ```

3. **Run the service locally**:
   ```bash
   gunicorn --bind 0.0.0.0:8080 service:app
   ```

### Running Tests

```bash
pytest
```

---

## 📜 License

Licensed under the Apache License. See [LICENSE](/LICENSE) for details.

---
<p align="center">
   <b>© IBM Corporation 2026. All rights reserved.</b><br>
   <i>Developed as part of the CI/CD Tools and Practices Final Project</i>
</p>
