#!/bin/bash

POSTGRES_PASSWORD=Mydatabasepassword1
DATABASE_PORT=5432

DATABASE_URL=postgresql://postgres:${POSTGRES_PASSWORD}@localhost:${DATABASE_PORT}/postgres

migration_number= find ./prisma/migrations -mindepth 1 -maxdepth 1 -type d | wc -l

migration_number = $migration_number + 1

docker run -dp 5432:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_USER=${POSTGRES_USER} --name temp_db postgres:16-alpine 

sleep 3

npx prisma migrate dev --name migration_${migration_number}

docker stop temp_db && docker rm temp_db