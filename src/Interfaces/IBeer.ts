export default interface IBeer {
  id?: string;
  abv: number; // alcohol by volume
  address?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  category?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  city?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  coordinates?: number[]; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  country?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  ibu: number; // international bittering units
  name?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  state?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
  website?: string; // SOME DOCUMENTS DO NOT HAVE THIS PROPERTY
}
