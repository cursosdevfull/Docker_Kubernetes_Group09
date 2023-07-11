FROM centos:7

# Instalamos apache
RUN yum update -y && yum install httpd -y

# Copiamos los archivos de la web
COPY web /var/www/html

# Exponemos el puerto 80
# EXPOSE 80

# Arrancamos apache
CMD ["apachectl", "-D", "FOREGROUND"]