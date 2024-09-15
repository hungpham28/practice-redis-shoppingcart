# Tutorial: A Shopping Cart app in NodeJS and Redis JSON

## Technical Stack

- Frontend - Vue.js
- Backend - NodeJS, ExpressJS, Redis(Redis JSON)

This shopping cart is using Redis and Redis JSON functionalities, allowing you to save JSON as keys using methods like json_get and json_set.


## Hot to run it locally?

### Prerequisites

- Node - v12.19.0
- NPM - v6.14.8
- Docker - v19.03.13 (optional)

### Local installation

Go to server folder (`cd ./server`) and then:

```
# Environmental variables

Copy `.env.example` to `.env` file and fill environmental variables

REDIS_PORT: Redis port (default: 6379)
REDIS_HOST: Redis host (default: 127.0.0.1)
REDIS_PASSWORD: Redis password (default: demo)

cp .env.example .env

# Run docker compose or install redis with RedisJson module manually. You can also go to https://redislabs.com/try-free/ and obtain necessary environmental variables

docker network create global
docker-compose up -d --build

# Install dependencies

npm install

# Run dev server

npm run dev
```

Go to client folder (`cd ./client`) and then:

```
# Environmental variables

Copy `.env.example` to `.env` file

cp .env.example .env

# Install dependencies

npm install

# Serve locally

npm run serve
```

