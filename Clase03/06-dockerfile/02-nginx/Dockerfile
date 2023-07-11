FROM centos:7

# Instalamos apache
RUN yum install epel-release -y && \ 
    yum update -y && \ 
    yum install nginx -y

# Copiamos los archivos de la web
COPY html /usr/share/nginx/html

# Copiamos la imagen de chatgpt desde el servidor de futurelab.pe
ADD https://futurelab.pe/wp-content/uploads/2023/04/chatgpt.jpg /usr/share/nginx/html/images/chatgpt.jpg

RUN chmod 755 /usr/share/nginx/html/images/chatgpt.jpg
# Exponemos el puerto 80
# EXPOSE 80

# Arrancamos nginx
CMD ["nginx", "-g", "daemon off;"]