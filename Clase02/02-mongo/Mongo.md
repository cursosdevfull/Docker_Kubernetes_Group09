# Mongo

```
docker run -d --name server-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=shidalgo -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db_curso mongo:3.6.23
```

### Para conectarnos al contenedor desde otro contenedor de mongo

```
docker run -it --name test-mongo mongo:3.6.23 mongosh
docker run -it --rm --name test-mongo mongo:3.6.23 mongosh
docker run -it --rm mongo:3.6.23 mongo --host 172.17.0.7 -u shidalgo -p 12345 --authenticationDatabase admin db_curso
```

### Crear un cliente para Mongo

```
docker run -d --name client-mongo -e ME_CONFIG_MONGODB_ADMINUSERNAME=shidalgo -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345 -e ME_CONFIG_MONGODB_SERVER=172.17.0.7 -p 9100:8081 mongo-express
```

### Contenedor de Mongo con persistencia en volumen host

```
docker run -d --name server-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=shidalgo -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db_curso -v D:\\Cursos\\Docker_Kubernetes_Group09\\Clase02\\02-mongo\\db-mongo:/data/db mongo:3.6.23
```

### Crear un volumen nombrado

```
docker volume create vol-mongo
```

### Contenedor de Mongo con persistencia en volumen nombrado

```
docker run -d --name server-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=shidalgo -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db_curso -v vol-mongo:/data/db mongo:3.6.23
```
