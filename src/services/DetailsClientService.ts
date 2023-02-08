import { prismaClient } from "../prisma";
import { Coord } from "../helpers/CoordinatesClient";
import { removeEmpty } from "../helpers/RemoveEmpty";

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

    const clientCoord = Coord(client);

    return removeEmpty(clientCoord);
  }
}
