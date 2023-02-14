FROM node:18.12

WORKDIR /api

COPY ./package.json .

COPY ./db.json  .

COPY ./dist  .

RUN npm install --omit=dev
