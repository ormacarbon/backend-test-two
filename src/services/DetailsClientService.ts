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
