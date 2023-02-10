export default class Beer {
  private _id: string | undefined;
  private _abv: number; // alcohol by volume
  private _address: string | undefined;
  private _category: string | undefined;
  private _city: string | undefined;
  private _coordinates: number[] | undefined;
  private _country: string | undefined;
  private _ibu: number; // international bittering units
  private _name: string;
  private _state: string | undefined;
  private _website: string | undefined;

  constructor(
    abv: number,
    ibu: number,
    name: string,
    id: string | undefined,
  ) {
    this._abv = abv;
    this._ibu = ibu;
    this._name = name;
    this._id = id;
  }

  public get id() {
    return this._id;
  }

  public setId(id: string) {
    this._id = id;
  }

  public get abv() {
    return this._abv;
  }

  public set abv(value: number) {
    this._abv = value;
  }

  public get address() {
    return this._address;
  }

  public setAddress(value: string) {
    this._address = value;
  }

  public get category() {
    return this._category;
  }

  public setCategory(value: string) {
    this._category = value;
  }

  public get city() {
    return this._city;
  }

  public setCity(value: string) {
    this._city = value;
  }

  public get coordinates() {
    return this._coordinates;
  }

  public setCoordinates(value: number[]) {
    this._coordinates = value;
  }

  public get country() {
    return this._country;
  }

  public setCountry(value: string) {
    this._country = value;
  }

  public get ibu() {
    return this._ibu;
  }

  public set ibu(value: number) {
    this._ibu = value;
  }

  public get name() {
    return this._name;
  }

  public setName(value: string) {
    this._name = value;
  }

  public get state() {
    return this._state;
  }

  public setState(value: string) {
    this._state = value;
  }

  public get website() {
    return this._website;
  }

  public setWebsite(value: string) {
    this._website = value;
  }
}
