FROM node:16-alpine

WORKDIR /app-backend

COPY package.json /app-backend

RUN ["npm", "i"] 

COPY . /app-backend

EXPOSE 3001

CMD ["npm" , "run", "dev"]