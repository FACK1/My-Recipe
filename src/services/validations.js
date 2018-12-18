const joi = require('joi');

const addRecipeValidation = {
  name: joi.string().min(2).max(30).required(),
  recipe: joi.string().min(50).required(),
  img_url: joi.string().required(),
  type: joi.boolean().required(),
};

module.exports = {
  addRecipeValidation,
};
