一旦你有了生成的 Docker 镜像的 tar 包，你可以将它加载回 Docker 中，并运行容器。以下是加载和运行 Docker 镜像的一般步骤：

1. **加载 Docker 镜像：**
   使用以下命令将之前保存的 tar 包加载为 Docker 镜像：
   
   ```bash
   docker load -i /path/to/save/postgres.tar
   ```
这将还原 Docker 镜像，你可以通过 `docker images` 命令检查是否成功加载。
   
2. **运行容器：**
   一旦 Docker 镜像加载成功，你可以使用以下命令运行容器：
   ```bash
   docker run -d -p 5432:5432 --name my_postgres_container -e POSTGRES_PASSWORD=123456 postgres
   ```
   在这里，`my_postgres_container` 是你为容器指定的名称，`postgres` 是镜像名称。

3. **验证容器运行：**
   使用以下命令验证容器是否正在运行：
   
   ```bash
   docker ps
```
   
   如果容器正在运行，你应该能够看到类似如下的输出：
   ```
   CONTAINER ID   IMAGE      COMMAND                  CREATED       STATUS         PORTS                    NAMES
   abcdef123456   postgres   "docker-entrypoint.s…"   2 minutes ago Up 2 minutes   0.0.0.0:5432->5432/tcp   my_postgres_container
   ```

这样，你就成功加载了 Docker 镜像并运行了相应的容器。请注意，具体的命令参数可能会根据你保存镜像时的配置有所不同。确保在加载和运行时使用正确的文件路径、镜像名称和标签。

4.**导入数据：**

* windows terminal：

```bash
type /path/to/save/database_dump.sql | docker exec -i my_postgres_container psql -U postgres
```

* bash：

```bash
cat /path/to/save/database_dump.sql | docker exec -i my_postgres_container psql -U postgres
```

