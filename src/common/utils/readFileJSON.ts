import fs from 'fs';
import Path = require('path');

/**
 *
 * @param path Path from file recevied.
 * @summary Unlink the file recevied through of param.
 */

export function unlinkFile(path: string): void {
  fs.unlinkSync(path);
}

/**
 * @param path Path from file recevied.
 * @summary Read the file recevied through of param.
 */

function readFile(path: string): string | void {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}

/**
 *
 * @param path Path from file recevied.
 * @summary Read the file and return its data, before, respectively, calling the readFile and unlinkFile function.
 */

export async function catchContent(path: string): Promise<string | void> {
  path = Path.resolve(__dirname, '..', '..', '..', path);
  const file = readFile(path);

  if (file) {
    unlinkFile(path);

    return file;
  }

  return;
}
