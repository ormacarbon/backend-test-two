import { prismaClient } from "../prisma";

interface ClientRequest {
  abv: number;
  address: string;
  category: string;
  city: string;
  coordinates: string;
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
    coordinates,
    country,
    description,
    ibu,
    name,
    state,
    website,
  }: ClientRequest) {
    const clientAlreadyExists = await prismaClient.client.findFirst({
      where: {
        coordinates: coordinates,
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
        coordinates: coordinates,
        country: country,
        description: description,
        ibu: ibu,
        name: name,
        state: state,
        website: website,
      },
    });

    return client;
  }
}
