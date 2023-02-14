import { z } from 'zod';

const BeersZodSchema = z.object({
  abv: z.number(),
  address: z.string(),
  category: z.string(),
  city: z.string(),
  coordinates: z.number().array(),
  country: z.string(),
  description: z.string(),
  ibu: z.number(),
  state: z.string(),
  name: z.string(),
  website: z.string(),
});

export type IBeers = z.infer<typeof BeersZodSchema>;

export { BeersZodSchema };