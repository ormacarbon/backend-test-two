import { z } from 'zod';

const beerZodSchema = z.object({
  abv: z
  .number({
    required_error: "abv is required",
    invalid_type_error: "abv must be a number",
  }),
  address: z
    .string({
      required_error: "address is required",
      invalid_type_error: "address must be a string",
    }),
  category: z
    .string({
      required_error: "category is required",
      invalid_type_error: "category must be a string",
    }),
  city: z
    .string({
      required_error: "city is required",
      invalid_type_error: "city must be a string",
    }),
  coordinates: z
    .string({
      required_error: "coordinates is required",
      invalid_type_error: "coordinates must be a string",
    }),
  country: z
    .string({
      required_error: "country is required",
      invalid_type_error: "country must be a string",
    }),
  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description must be a string",
    }),
  ibu: z
    .number({
      required_error: "ibu is required",
      invalid_type_error: "ibu must be a number",
    }),
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    }),
  state: z
    .string({
      required_error: "state is required",
      invalid_type_error: "ibu must be a string",
    }),
  website: z
    .string({
      required_error: "website is required",
      invalid_type_error: "ibu must be a site",
    }),
});

type IBeer = z.infer<typeof beerZodSchema>;

export { IBeer, beerZodSchema };