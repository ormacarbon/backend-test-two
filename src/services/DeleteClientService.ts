import { prismaClient } from "../prisma";
import { Coord } from "../helpers/CoordinatesClient";
import { removeEmpty } from "../helpers/RemoveEmpty";

interface ClientRequest {
  id: string;
}

export class DeleteClientService {
  async execute({ id }: ClientRequest) {
    const client = await prismaClient.client.delete({
      where: {
        id: id,
      },
    });
    const clientCoord = Coord(client);

    return removeEmpty(clientCoord);
  }
}
