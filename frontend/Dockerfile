FROM node:18.10.0-slim

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]