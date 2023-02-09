import z from 'zod';

const BreweryUpdateDTO = z.object({
  id: z.string().optional(),
  abv: z.number().optional(),
  address: z.string().optional(),
  category: z.string().optional(),
  city: z.string().optional(),
  coordinates: z.number().array().optional(),
  country: z.string().optional(),
  description: z.string().optional(),
  ibu: z.number().optional(),
  name: z.string().optional(),
  state: z.string().optional(),
  website: z.string().optional()
});

export default BreweryUpdateDTO;
