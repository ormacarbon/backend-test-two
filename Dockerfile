FROM node:19.3.0

LABEL maintainer="Victor Santos"

WORKDIR /app

ADD package.json /app
RUN npm install 
ADD . .

EXPOSE 3000

CMD ["npm","run", "dev"]