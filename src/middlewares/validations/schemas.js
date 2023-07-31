const Joi = require('joi');

const displayNameSchema = Joi.string().min(8);

const passwordSchema = Joi.string().min(6);

const emailSchema = Joi.string().email();

module.exports = {
  displayNameSchema,
  passwordSchema,
  emailSchema,
};
