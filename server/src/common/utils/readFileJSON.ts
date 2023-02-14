import fs from 'fs';

/**
 *
 * @param path Path from file recevied.
 * @summary Unlink the file recevied through of param.
 *
 *
 *
 * @
 *
 */

export function unlinkFile(path: string): void {
  fs.unlinkSync(path);
}

/**
 * @param path Path from file recevied.
 * @summary Read the file recevied through of param.
 * @deprecated your use not necessary more, it was not removed because want your evolution,
 * before, response in endpoint for save data json it was 13s with all validations. now, 5s with um file with 2MB
 *
 */

export function readFile(path: string): string | void {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}
