# Angular

```
docker run -d --name server-web-angular -p 9000:80 -v $(pwd -W)/dist/angular:/usr/share/nginx/web:ro -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine
```
