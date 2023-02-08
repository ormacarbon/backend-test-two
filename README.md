# Instalação

## Alterar nome de example.env para .env e atualizar o conteúdo com os dados do seu banco:

```code
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

## Instalar dependências

```
npm install
```

## Fazer a migração para o banco de dados Postgresql

```
npx prisma migrate dev
```

## Rodar a API na porta 3000

```
npm start
```
