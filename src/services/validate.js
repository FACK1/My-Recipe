const joi = require('joi');

const validate = validateCheck => (req, res, next) => {
  const validationResult = joi.validate(req.body, validateCheck, { abortEarly: false });

  if (validationResult.error) {
    console.log("errrrrr",validationResult);
    res.status(200).json({ err: validationResult.error.details.map(error => error.message) });
  } else {
    next();
  }
};

module.exports = validate;
