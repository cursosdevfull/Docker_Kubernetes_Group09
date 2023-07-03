# MySQL

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=courses -e MYSQL_USER=shidalgo -e MYSQL_PASSWORD=54321 mysql:8
```

### PHPMyAdmin

```
docker run -d --name phpmyadmin -p 9000:80 -e PMA_ARBITRARY=1 phpmyadmin:5.2.1-fpm-alpine
```

### Creación de volumen para persistir la data de MySQL

```
docker volume create vol-mysql
```

### MySQL con persistencia de data

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=courses -e MYSQL_USER=shidalgo -e MYSQL_PASSWORD=54321 -v vol-mysql:/var/lib/mysql mysql:8
```

### Creación de un contenedor para conectarnos a MySQL

```
docker run -it --rm mysql:8 mysql --host 172.17.0.3 -u root -p
```
