import Joi from 'joi';

const abvSchema = Joi.number().empty().min(1).required();

const addressSchema = Joi.string().empty().min(3).max(100);

const categorySchema = Joi.string().empty().min(3).max(15);

const citySchema = Joi.string().empty().min(3).max(15);

const countrySchema = Joi.string().empty().min(3).max(15);

const coordinatesSchema = Joi.array().items(Joi.number().min(1).required());

const ibuSchema = Joi.number().empty().min(1).required();

const nameSchema = Joi.string().empty().min(3).max(15)
  .required();

const stateSchema = Joi.string().empty().min(3).max(15);

const websiteSchema = Joi.string().empty().min(3).max(50);

const beerObjectSchema = Joi.object({
  abv: abvSchema,
  address: addressSchema,
  category: categorySchema,
  city: citySchema,
  coordinates: coordinatesSchema,
  country: countrySchema,
  ibu: ibuSchema,
  name: nameSchema,
  state: stateSchema,
  website: websiteSchema,
}).required();

export default beerObjectSchema;
