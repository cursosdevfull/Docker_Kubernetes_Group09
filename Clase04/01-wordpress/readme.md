# WordPress

### Crear la red

```
docker network create net-wp -d bridge
```

### Crear volúmenes

```
docker volume create vol-wp
docker volume create vol-mysql2
```

### Contenedor de MySQL

```
docker run -d --name server-mysql -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=shidalgo -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=db_curso --network net-wp -v vol-mysql2:/var/lib/mysql mysql:8
```

### Contenedor de WordPress

```
docker run -d --name server-wp -p 9100:80 -e WORDPRESS_DB_HOST=server-mysql -e WORDPRESS_DB_USER=shidalgo -e WORDPRESS_DB_PASSWORD=12345 -e WORDPRESS_DB_NAME=db_curso --network net-wp -v vol-wp:/var/www/html wordpress
```
