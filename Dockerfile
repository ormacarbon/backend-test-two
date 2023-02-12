FROM node:19.3.0

LABEL maintainer="Victor Santos"

WORKDIR /usr/app

ADD package.json /usr/app
RUN npm install 
ADD . /usr/app



ENV  DATABASE_CONNECTION=mongodb://172.17.0.1:27017
ENV DATABASE_CONNECTION_TEST=mongodb://172.17.0.1:5005


EXPOSE 3000

CMD ["npm","run", "dev"]

