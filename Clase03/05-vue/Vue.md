# Vue

```
docker run -d --name server-web-vue -p 9000:80 -v $(pwd -W)/dist:/usr/share/nginx/web:ro -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine
```
