
import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({

  MONGODB: Joi.string().required(),
  PORT: Joi.number().default(3002),
  DEFAULT_LIMIT: Joi.number().default(10)
  
});