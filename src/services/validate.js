const joi = require('joi');

const validate = validateCheck => (req, res, next) => {
  const validationResult = joi.validate(req.body, validateCheck, { abortEarly: false });
  if (validationResult.error) {
    //res.status(200).json({ err: validationResult.error.details.map(error => error.message) });
    next('500');
  } else {
    next();
  }
};

module.exports = validate;
