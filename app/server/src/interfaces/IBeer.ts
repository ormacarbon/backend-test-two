import { z } from 'zod';

const beerZodSchema = z.object({
  id: z
    .string({
      invalid_type_error: "id must be a number",
    })
    .optional(),
  abv: z
    .string({
      invalid_type_error: "abv must be a string",
    })
    .optional(),
  address: z
    .string({
      invalid_type_error: "address must be a string",
    })
    .optional(),
  category: z
    .string({
      invalid_type_error: "category must be a string",
    })
    .optional(),
  city: z
    .string({
      invalid_type_error: "city must be a string",
    })
    .optional(),
  coordinates: z
    .string({
      invalid_type_error: "coordinates must be a string",
    })
    .optional(),
  country: z
    .string({
      invalid_type_error: "country must be a string",
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
    })
    .optional(),
  ibu: z
    .number({
      invalid_type_error: "ibu must be a number",
    })
    .optional(),
  name: z
    .string({
      invalid_type_error: "name must be a string",
    })
    .optional(),
  state: z
    .string({
      invalid_type_error: "ibu must be a string",
    })
    .optional(),
  website: z
    .string({
      invalid_type_error: "ibu must be a site",
    })
    .optional(),
});

type IBeer = z.infer<typeof beerZodSchema>;

export { IBeer, beerZodSchema };