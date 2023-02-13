## HOW TO RUN THE APPLICATION:

#### **execute for create the database with docker-compose**
```bash 
docker-compose --env-file ./.env up -d
```
**OBS: it's important that you have the ".env" created with its proper values**

#### **execute for install all project dependencies**
```bash 
npm install
```
#### **execute for populate the database with db.json**
```bash 
 ts-node ./src/config/database/populate-db.ts
```
**OBS: it's important that you have the "ts-node" globally install in your machine**

#### **execute for to up application**
```bash 
npm run dev
```

