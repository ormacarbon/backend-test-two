import fs from 'fs';
import Path = require('path');

async function readFile(path: string): Promise<string | void> {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}

export async function catchContent(path: string) {
  path = Path.resolve(__dirname, '..', '..', '..', path);
  const file = await readFile(path);

  if (file) {
    return file;
  }

  return;
}
