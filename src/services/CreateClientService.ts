import { prismaClient } from "../prisma";

interface ClientRequest {
  abv: number;
  address: string;
  category: string;
  city: string;
  lat: number;
  long: number;
  country: string;
  description: string;
  ibu: number;
  name: string;
  state: string;
  website: string;
}

export class CreateClientService {
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
    const clientAlreadyExists = await prismaClient.client.findFirst({
      where: {
        lat: lat,
        long: long,
      },
    });

    if (clientAlreadyExists) {
      throw new Error("These coordinates have been registered before");
    }

    const client = await prismaClient.client.create({
      data: {
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
