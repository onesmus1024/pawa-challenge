FROM php:8.2-cli
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo 
RUN apt install php-xml
RUN apt install php-sqlite3
WORKDIR /app
COPY /weather-backend /app
RUN composer install

CMD php artisan serve 
EXPOSE 8000