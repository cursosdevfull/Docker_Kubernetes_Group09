# NGINX: Crear volúmenes de tipo host usando rutas relativas para NGINX

### Usando terminal PowerShell

```
docker run -d --name server-nginx -p 9200:80 -v ${PWD}\html:/usr/share/nginx/html nginx:alpine
```

### Usando terminal Git Bash

```
docker run -d --name server-nginx -p 9200:80 -v $(pwd -W)/html:/usr/share/nginx/html nginx:alpine
```

### Usando terminal de tipo Linux

```
docker run -d --name server-nginx -p 9200:80 -v $(pwd)/html:/usr/share/nginx/html nginx:alpine
```

### Vinculando el archivo de configuración (default.conf)

```
docker run -d --name server-nginx -p 9200:80 -v $(pwd -W)/html:/usr/share/nginx/web -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf nginx:alpine
```

### Restringiendo el volumen a solo lectura

```
docker run -d --name server-nginx -p 9200:80 -v $(pwd -W)/html:/usr/share/nginx/web:ro -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine
```
