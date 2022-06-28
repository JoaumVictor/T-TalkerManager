const validateNumber = (number) => {
  if (!Number.isInteger(number)) return false;
  const acceptable = [1, 2, 3, 4, 5];
  return acceptable.some((each) => each === number);
};

const requestField = (req, res, next) => {
  const { talk } = req.body;
  if (talk.rate === 0) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!talk.rate || talk.rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!validateNumber(talk.rate)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = requestField;