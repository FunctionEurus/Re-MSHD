## Description

一个使用Nest.js搭建的灾情管理系统的简陋后端（躺）。

## Installation

```bash
$ npm install
```

## Running the database

```bash
$ docker-compose up -d

$ cat database_dump.sql | docker exec -i mshd-db-1 psql -U postgres
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prods
```
