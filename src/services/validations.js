const joi = require('joi');

const addRecipeValidation = {
  name: joi.string().min(2).max(30).required(),
  recipe: joi.string().min(50).required(),
  imgUrl: joi.string().uri().trim().required(),
  type: joi.boolean().required(),
};

module.exports = {
  addRecipeValidation,
};
