FROM node:18.14.0-alpine

WORKDIR /app

COPY package.json .

COPY . .

RUN rm -rf node_modules

RUN npm update -g npm

RUN npm cache clear --force

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]