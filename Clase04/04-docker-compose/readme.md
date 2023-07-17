# Docker Compose

### Para ejecutar el docker-compose.yaml

```
docker compose up -d
```

### Para detener el docker-compose.yaml

```
docker compose down
```

### Para listar los contenedores que se están ejecutando por docker-compose.yaml

```
docker compose ps
```

### Para ejecutar solo algunos servicios

```
docker compose up -d <nombre servicio> <nombre servicio> ...
```

### Para ejecutar un docker compose en una ubicación diferente y con un nombre diferente
```
docker compose -f composer/composer.yaml up -d
```