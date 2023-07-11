FROM centos:7

# Instalamos apache
RUN yum install epel-release -y && \ 
    yum update -y && \ 
    yum install httpd -y

WORKDIR /var/www/html

COPY run.sh ./run.sh

CMD ["sh", "./run.sh"]
