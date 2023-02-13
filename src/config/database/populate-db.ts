import { connect, disconnect } from './database';
import { readFileSync } from 'fs';


async function main() {

    const database = await connect();

    const data = JSON.parse(readFileSync('./db.json', 'utf-8'));

    await database.collection(process.env.DATABASE_COLLECTION).insertMany(data);

    console.log('Dados inseridos com sucesso!');

    disconnect();

}

main().catch(console.error);