import { prismaClient } from "../prisma";

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
    let clientCoord = {
      abv: client.abv,
      address: client.address,
      category: client.category,
      city: client.city,
      coordinates: [client.lat, client.long],
      country: client.country,
      description: client.description,
      ibu: client.ibu,
      name: client.name,
      state: client.state,
      website: client.website,
    };

    function removeEmpty(client: object) {
      return Object.fromEntries(
        Object.entries(client).filter(([_, v]) => v != "")
      );
    }

    return removeEmpty(clientCoord);
  }
}
