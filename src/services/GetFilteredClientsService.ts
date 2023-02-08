import { prismaClient } from "../prisma";
import { Coord } from "../helpers/CoordinatesClient";
import { removeEmpty } from "../helpers/RemoveEmpty";

interface ClientRequest {
  abv?: number;
  address?: string;
  category?: string;
  city?: string;
  lat?: number;
  long?: number;
  country?: string;
  description?: string;
  ibu?: number;
  name?: string;
  state?: string;
  website?: string;
}
export class GetFilteredClientsService {
  async execute({
    abv,
    address,
    category,
    city,
    lat,
    long,
    country,
    description,
    ibu,
    name,
    state,
    website,
  }: ClientRequest) {
    const clients = await prismaClient.client.findMany({
      where: {
        abv: abv,
        address: address,
        category: category,
        city: city,
        lat: lat,
        long: long,
        country: country,
        description: description,
        ibu: ibu,
        name: name,
        state: state,
        website: website,
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
