import IBeer from "../interfaces/IBeer";

export default class Beer {
  id: string | undefined;
  abv: number;
  address: string;
  category: string;
  city: string;
  coordinates: number[];
  country: string;
  description: string;
  ibu: number;
  name: string;
  state: string;
  website: string;
  constructor({
    id,
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
  }: IBeer) {
    this.id = id;
    this.abv = abv;
    this.address = address;
    this.category = category;
    this.city = city;
    this.coordinates = coordinates;
    this.country = country;
    this.description = description;
    this.ibu = ibu;
    this.name = name;
    this.state = state;
    this.website = website;
  }
}
