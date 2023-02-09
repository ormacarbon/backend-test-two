import { Server } from 'http';

export async function loadModules(server: Server) {
  return Object.values(await import('../../modules')).map((_module) =>
    _module(server),
  );
}
