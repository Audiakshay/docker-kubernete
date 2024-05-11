# docker-kubernete

<!-- To create docker image(executable file to run container) -->

Run: docker build -t <image-name> .

<!-- To see the images created -->

Run: docker images

<!-- To run container. docker-name: give any name -->

Run: docker run --name <docker-name> <image-name>

<!-- To see the status of the running container -->
<!--   \\\\\\\\\\\\\-------------Example------------\\\\\\\\\\\\\\
CONTAINER ID IMAGE   COMMAND                CREATED       STATUS       PORTS    NAMES
122723314c43 nodeapp "docker-entrypoint.s…" 2 minutes ago Up 2 minutes 3000/tcp   docker-kuber-app
 -->

Run: docker ps
