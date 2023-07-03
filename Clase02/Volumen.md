# Volúmenes

### Volumen host

```
docker run -d --name server-nginx -p 9200:80 -v D:\\Cursos\\Docker_Kubernetes_Group09\\Clase02\\04-volumenes\\html:/usr/share/nginx/html nginx:alpine
```

### Volumen nombrado

```
docker volume create vol-nginx
```

### Para listar volúmenes nombrados

```
docker volume ls
```

### Para vincular un volumen nombrado

```
docker run -d --name server-nginx -p 9200:80 -v vol-nginx:/usr/share/nginx/html nginx:alpine
```

### Para inspeccionar un volumen nombrado

```
docker volume inspect vol-nginx
```

### Volumen anónimo

```
docker run -d --name server-nginx -p 9200:80 -v /usr/share/nginx/html nginx:alpine
```
