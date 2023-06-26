# Imágenes

### Listar imágenes

```
docker images
```

### Filtar el listado de imágenes

```
docker images | grep <término a buscar>
```

### Inspeccionar una imagen

```
docker image inspect <nombre de la imagen>
docker image inspect <nombre de la imagen>:<tag>
```

### Eliminar una imagen

```
docker rmi <nombre de la imagen>:<tag>
```

### Forzar la eliminación de una imagen

```
docker rmi -f <nombre de la imagen>:<tag>
```

### Descargar imágenes

```
docker pull <nombre imagen>:<tag>
```
