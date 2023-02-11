import z from 'zod';

const BreweryDTO = z.object({
  abv: z.number(),
  address: z.string(),
  category: z.string(),
  city: z.string(),
  coordinates: z.number().array(),
  country: z.string(),
  description: z.string(),
  ibu: z.number(),
  name: z.string(),
  state: z.string(),
  website: z.string()
});

export default BreweryDTO;
