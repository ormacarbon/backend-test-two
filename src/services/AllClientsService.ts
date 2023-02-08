import { prismaClient } from "../prisma";

export class AllClientsService {
  async execute() {
    const clients = await prismaClient.client.findMany({
      orderBy: {
        name: "asc",
      },
    });

    const clientsArray = [] as Array<Object>;
    for (let i = 0; i < clients.length; i++) {
      const element = clients[i];
      function removeEmpty(element: object) {
        let client = Object.fromEntries(
          Object.entries(element).filter(([_, v]) => v != "")
        );
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
        clientsArray.push(clientCoord);
      }
      removeEmpty(element);
    }

    return clientsArray;
  }
}
