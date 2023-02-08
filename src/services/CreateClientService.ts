import { prismaClient } from "../prisma";
import { Coord } from "../helpers/CoordinatesClient";
import { removeEmpty } from "../helpers/RemoveEmpty";

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
    const clientCoord = Coord(client);

    return removeEmpty(clientCoord);
  }
}
