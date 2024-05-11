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

<!-- Once container is runned there will be no page found for the container, untill local machine port is mapped with container port-->
<!-- Example: docker run --name docker-kuber-app-2 -p 3000:3000 <image-name> -->

Run: docker run --name <port-name> -p localport:dockport <image-name>

<!-- Rebuilding image, because changes done on the local machine will not automatically reflect on the container -->

Run: docker build -t <image-name>:v2 .

<!-- To stop the current container running -->

Run: docker kill <image-name> / docker stop <image-name>

<!-- To remove the exited/stopped container -->

Run: docker rm <image-name>
