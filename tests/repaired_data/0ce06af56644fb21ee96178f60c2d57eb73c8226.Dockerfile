FROM php:7.2
ENV phpunit_verison 7.5
ENV redis_version 4.0.11

RUN apt-get update && \
    apt-get install --no-install-recommends -y wget && rm -rf /var/lib/apt/lists/*;

RUN wget https://phar.phpunit.de/phpunit-${phpunit_verison}.phar && \
    chmod +x phpunit-${phpunit_verison}.phar && \
    mv phpunit-${phpunit_verison}.phar /usr/local/bin/phpunit

# install php extension
RUN yes '' | pecl install -f redis && \
    docker-php-ext-enable redis

# install redis server
RUN wget https://download.redis.io/releases/redis-${redis_version}.tar.gz && \
    tar -xzf redis-${redis_version}.tar.gz && \
    make -s -C redis-${redis_version} -j && rm redis-${redis_version}.tar.gz

CMD PATH=$PATH:/usr/local/bin/:/redis-${redis_version}/src/ && \
    cp -rp /src /app && \
    cd /app && \
    phpunit
