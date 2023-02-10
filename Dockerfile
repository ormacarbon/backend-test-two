FROM node:16.14-alpine
WORKDIR /app
COPY . .
EXPOSE 3001
RUN npm install
ENTRYPOINT [ "npm", "run", "dev" ]