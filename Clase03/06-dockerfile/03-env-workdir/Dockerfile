FROM centos:7

# Instalamos apache
RUN yum install epel-release -y && \ 
    yum update -y && \ 
    yum install httpd -y

# Crear variable de entorno
ENV FUTLAB_VERSION 1.0.0
ENV PORT 5000
ENV HOST 0.0.0.0
ENV USERNAME=chatgpt \
    PASSWORD=chatgpt

WORKDIR /var/www/html

RUN echo $FUTLAB_VERSION > ./version.html
RUN echo "<h1>USERNAME: $USERNAME</h1><h2>PASSWORD: $PASSWORD</h2>" > ./credentials.html

WORKDIR /app

COPY env ./env

RUN set -o allexport && source ./env && set +o allexport

CMD ["apachectl", "-D", "FOREGROUND"]
