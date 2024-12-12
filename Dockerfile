FROM php:7.4-apache

WORKDIR /var/www/html

RUN apt-get update && \
    apt-get install -y \
    unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /var/www/html

RUN composer require phpmailer/phpmailer

RUN cp -r /var/www/html/vendor /vendor

COPY startup.sh /usr/bin/init
RUN chmod +x /usr/bin/init

ENTRYPOINT ["/usr/bin/init"]