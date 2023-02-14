cd ./app
npm rum build
npx prisma migrate dev
npm run seed
npm run start