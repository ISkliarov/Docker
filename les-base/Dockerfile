#---------------------------------------------------
# Testing Dockerfile with AmazonLinux
#
# Made by Serhii Skliarov Date: 25 Aug 23
#---------------------------------------------------

FROM amazonlinux

RUN yum -y update
RUN yum -y install httpd

RUN echo "Simple testing page" > /var/www/html/index.html
CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND" ]

EXPOSE 80