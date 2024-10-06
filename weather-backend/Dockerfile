FROM php:8.2-cli

# Install necessary system packages and PHP extensions
RUN apt-get update -y && apt-get install -y \
    libmcrypt-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-install \
    pdo_mysql \
    mbstring \
    zip \
    bcmath

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /app

# Copy the application files into the Docker image
COPY . /app

# Install PHP dependencies
RUN composer install

# Expose port 8000 and start the Laravel application
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
