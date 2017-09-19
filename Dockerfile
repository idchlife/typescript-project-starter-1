FROM node:8.5.0

COPY ./server /app

WORKDIR /app/app

RUN rm -rf node_modules

RUN rm -f src/config/database.ts
RUN cp src/config/database.ts.conf src/config/database.ts

RUN npm i
RUN npm i -g pm2

RUN npm run build-once