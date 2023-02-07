import { prismaClient } from "../prisma";

export class DetailsClientService {
  async execute(id: string) {
    const client = await prismaClient.client.findFirst({
      where: {
        id: id,
      },
    });

    if (!client) {
      throw new Error("Client not found or not exists!");
    }

    return client;
  }
}
