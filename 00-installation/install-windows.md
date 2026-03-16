# Install Docker on Windows

## Requirements

- Windows 10/11 with virtualization enabled
- WSL 2 support enabled
- At least 4 GB RAM (8 GB recommended)

## 1. Enable WSL

Open PowerShell as Administrator and run:

```powershell
wsl --install
```

Restart your machine if prompted.

## 2. Install Docker Desktop

1. Download Docker Desktop from the official Docker website.
2. Run the installer.
3. Keep the option "Use WSL 2 instead of Hyper-V" enabled.
4. Complete setup and restart if required.

## 3. Verify Installation

Run:

```bash
docker --version
docker compose version
```

If both commands return versions, Docker is installed correctly.

## Common Checks

- Docker Desktop is running
- WSL integration is enabled in Docker Desktop settings
- Your Linux distro is selected under WSL integration
