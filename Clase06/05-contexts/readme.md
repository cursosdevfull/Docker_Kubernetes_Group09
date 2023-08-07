# Contexts

### Contexto actual

```
kubectl config current-context
```

### Listar contextos

```
kubectl config view
```

### Crear un contexto

```
kubectl config set-context ctx-curso13 --cluster=docker-desktop --user=docker-desktop
```

### Cambiar de contexto

```
kubectl config use-context ctx-curso13
```

### Eliminar un contexto

```
kubectl config delete-context ctx-curso13
```
