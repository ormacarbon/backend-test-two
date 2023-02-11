FROM node:18.12

WORKDIR /api

COPY ./package.json .

RUN npm install --omit=dev