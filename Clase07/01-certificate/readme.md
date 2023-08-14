# Certificados

### Para crear el key

```
openssl genrsa -out curso09.key 2048
```

### Para crear la solicitud

```
openssl req -new -key curso09.key -out curso09.csr -subj "/CN=curso09/O=cursosdev"
```

### Para generar el certificado final

```
openssl x509 -req -in curso09.csr -CA \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.key -CAcreateserial -out curso09.crt -days 500
```
