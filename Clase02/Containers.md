# Containers

### Para ejecutar un comando de un contenedor

```
docker exec <nombre o identificador del contenedor> <programa o librería a ejecutar>
docker exec -i -t <nombre o identificador del contenedor> <programa o librería a ejecutar>
docker exec -it <nombre o identificador del contenedor> <programa o librería a ejecutar>
```

### Para revisar los logs de un contenedor

```
docker logs <nombre o identificador del contenedor>
```

### Para crear variables de entorno

```
docker run -d --name <nombre del contenedor> -e <nombre variable> = <valor de la variable de entorno> <nombre imagen>:<tag>
docker run -d --name <nombre del contenedor> -e <nombre variable 1> = <valor de la variable de entorno 1> -e <nombre variable 2> = <valor de la variable de entorno 2> <nombre imagen>:<tag>
```
