const Joi = require('joi');

const displayNameSchema = Joi.string().min(8);

const passwordSchema = Joi.string().min(6);

const emailSchema = Joi.string().email();

const categoryIdsSchema = Joi.array().items(Joi.number().integer().positive());

module.exports = {
  displayNameSchema,
  passwordSchema,
  emailSchema,
  categoryIdsSchema,
};
