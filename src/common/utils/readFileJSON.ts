import fs from 'fs';
import Path = require('path');

export function unlinkFile(path: string): void {
  fs.unlinkSync(path);
}

function readFile(path: string): string | void {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}

export async function catchContent(path: string): Promise<string | void> {
  path = Path.resolve(__dirname, '..', '..', '..', path);
  const file = readFile(path);

  if (file) {
    unlinkFile(path);

    return file;
  }

  return;
}
