FROM php:8.2-cli
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo 
WORKDIR /app
COPY /weather-backend /app
RUN composer install
# migrate database
RUN php artisan migrate

CMD php artisan serve  --host=0.0.0.0 --port=8000
EXPOSE 8000