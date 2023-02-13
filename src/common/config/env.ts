import dotenv from 'dotenv';

const env = dotenv.config({ override: false });

if (env.error) throw new Error(`⚠️  Couldn't find .env file  ⚠️`);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { NODE_ENV, ...rest } = env.parsed ?? {};

process.env = { ...process.env, ...rest };

export { env };
