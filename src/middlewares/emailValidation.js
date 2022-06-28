const emailRegex = (email) => {
  const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return validateEmail.test(email);
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email || email === undefined) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailRegex(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = emailValidation;
