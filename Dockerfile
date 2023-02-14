FROM node:19.3.0

LABEL maintainer="Victor Santos"

WORKDIR /app

ADD package.json /app
RUN npm install 
ADD . .



ENV  DATABASE_CONNECTION=mongodb://172.17.0.1:27017/Application
ENV DATABASE_CONNECTION_TEST=mongodb://172.17.0.1:5005/Application


EXPOSE 3000

CMD ["npm","run", "dev"]