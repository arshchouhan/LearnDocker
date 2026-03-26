# Environment Variables and Interactive Shells

Date: Thursday, March 26, 2026

## 1. Passing Environment Variables with `-e`

```bash
docker run -e MY_VAR=Arsh httpd env
```

Works: runs the container and prints environment variables. `MY_VAR=Arsh` appears in output.

```bash
docker run httpd echo $MY_VAR
```

Does not work as expected in PowerShell: output is empty because PowerShell expands `$MY_VAR` before Docker receives it.

Use one of these:

```powershell
docker run httpd echo '$MY_VAR'
docker run httpd echo `$MY_VAR
```

```bash
docker run -it -e MY_NAME=Arsh ubuntu
```

Works: interactive Ubuntu shell opens, and `echo $MY_NAME` returns `Arsh`.

```bash
docker run -it -e MY_NAME=Arsh httpd /bin/sh
# echo MY_NAME   # prints literal "MY_NAME"
# echo $MY_NAME  # prints "Arsh"
```

Gotcha: `echo MY_NAME` prints literal text. Use `$` to read variable value.

## 2. Interactive Shells (`-it`)

```bash
docker run -t -e MY_NAME=Arsh ubuntu
```

Wrong for interaction: `-t` creates a TTY, but without `-i` stdin is not kept open, so it is not interactive.

```bash
docker run -it httpd /bin/sh
```

Works: opens a shell inside the `httpd` container filesystem.

Note:
- `httpd` default command is `httpd-foreground`, so add `/bin/sh` when you want a shell.
- `ubuntu` usually drops into a shell directly in interactive mode.

## 3. `docker start` vs `docker run`

```bash
docker start <container-id> -e MY_VAR=arsh httpd
```

Error: `docker start` does not accept `-e`. Environment variables are set at `docker run` (container creation) time.

```bash
docker run <container-id> -e MY_VAR=arsh httpd
```

Error: `docker run` expects an image name, not a container ID.

## 4. Key Takeaways

1. Use `-e KEY=VALUE` with `docker run`, not `docker start`.
2. Use `-it` together for interactive containers (`-i` = stdin, `-t` = tty).
3. In PowerShell, `$VAR` can be expanded before Docker sees it. Use single quotes or backtick escaping.
4. Use `docker run <image> /bin/sh` to override the default command and open a shell.
