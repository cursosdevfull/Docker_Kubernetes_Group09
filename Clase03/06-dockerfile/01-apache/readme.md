# Dockerfile

### FROM

```
FROM centos:7
```

### RUN

```
RUN yum update
RUN yum install httpd

RUN yum update & yum install httpd
```

### COPY

```
COPY web /var/www/html
```

### CMD

```
CMD ["apachectl", "-D", "FOREGROUND"]
```

### Creación de imagen usando Dockerfile

```
docker build -t <nombre image>:<version> .
```

### Creación de imagen usando un archivo que no se llama Dockerfile

```
docker build -t <nombre imagen>:<version> -f <ruta y nombre del dockerfile> .
```
