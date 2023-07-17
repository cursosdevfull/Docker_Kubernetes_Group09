# Network

### Para crear una red bridge

```
docker network create net-curso -d bridge
```

### Para listar las redes

```
docker network ls
```

### Para crear un contenedor asociado a una red existente

```
docker run -d --name server-nginx01 --network net-curso nginx:alpine
docker run -d --name server-nginx02 --network net-curso nginx:alpine
docker run -d --name server-nginx03 --network net-test nginx:alpine
```

### Para inspeccionar una red

```
docker network inspect net-curso
```

### Para conectar un contenedor existente a una red existente

```
docker network connect net-test server-nginx03
```

### Para desconectar un contenedor de una red

```
docker network disconnect net-test server-nginx03
```

### Para inspeccionar una red

```
docker network inspect net-test
```

### Para eliminar un red

```
docker network rm net-test
```
