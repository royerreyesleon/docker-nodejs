# INSTALAR DOCKER
https://www.youtube.com/watch?v=BK-C2RofmTE&t=29s

# EJEMPLO DOCKER NODEJS
https://www.youtube.com/watch?v=iLlmm0L-VpQ&t=1227s

# INSTALAR WSL2, REINICIAR PC
https://docs.microsoft.com/en-us/windows/wsl/install-manual

# CREAR UNA IMAGEN
docker build -t example-docker-nodejs .

# LISTAR IMAGENES DEL SISTEMA
docker images

# EJECUTAR IMAGEN DE FORMA ITERATIVA
docker run -it -p 4000:3000 example-docker-nodejs

# EJECUTAR COMO SI FUERA UN PROCESO
docker run -d -p 4000:3000 example-docker-nodejs

# LISTAR LOS PROCESOS EJECUTANDOSE
docker ps

# DETENER UN PROCESO
docker stop id1234

# LISTAR TODOS LOS PROCESOS QUE EJECUTAMOS ANTERIORMENTE
docker ps -a