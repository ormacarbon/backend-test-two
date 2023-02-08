interface IClient {
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

export function Coord(client: IClient) {
  const clientCoord = {
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
  return clientCoord;
}
