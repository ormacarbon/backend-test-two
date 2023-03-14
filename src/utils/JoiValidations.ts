import Joi from "joi";

export const schemaNewBeer = Joi.object({
  abv: Joi.number().required(),
  address: Joi.string().required(),
  category: Joi.string().required(),
  city: Joi.string().required(),
  coordinates: Joi.array().items(Joi.number()).required(),
  country: Joi.string().required(),
  description: Joi.string().required(),
  ibu: Joi.number().required(),
  name: Joi.string().required(),
  state: Joi.string().required(),
  website: Joi.string().uri().required(),
});
