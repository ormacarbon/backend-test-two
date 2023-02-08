import { prismaClient } from "../prisma";
import { Coord } from "../helpers/CoordinatesClient";
import { removeEmpty } from "../helpers/RemoveEmpty";

interface ClientRequest {
  id: string;
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

export class UpdateClientService {
  async execute({
    id,
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
    const client = await prismaClient.client.update({
      where: {
        id: id,
      },
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
