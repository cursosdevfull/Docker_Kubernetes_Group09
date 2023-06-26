# Contenedores

### Crear un contenedor

```
docker create --name <nombre contenedor> <nombre imagen>:<tag>
```

### Listar contenedores que se están ejecutando

```
docker ps
docker ps | grep <termino a buscar>
```

### Listar contenedores que se estén ejecutando o no

```
docker ps -a
docker ps -a | grep <termino a buscar>
```

### Para ejecutar un contenedor detenido

```
docker start <nombre o identificador del contenedor>
```

### Para detener un contenedor

```
docker stop <nombre o identificador del contenedor>
```

### Para crear un contenedor y ejecutarlo inmediatamente

```
docker run --name <nombre contenedor> <nombre imagen>:<tag>
```

### Para crear un contenedor, ejecutarlo inmediatamente y no estar vinculado al mismo

```
docker run -d --name <nombre contenedor> <nombre imagen>:<tag>
```

### Para eliminar un contenedor detenido

```
docker rm <nombre o identificador contenedor>
```

### Para eliminar un contenedor no detenido previamente

```
docker rm -f <nombre o identificador del contenedor>
```

### Para crear un mapeo de puertos (puerto host y puerto contenedor)

```
docker run -d --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre imagen>:<tag>
docker run -d --name <nombre contenedor> -p <puerto host 01>:<puerto contenedor 01> -p <puerto host 02>:<puerto contenedor 02> <nombre imagen>:<tag>
```
