module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits.' });
    //next is not necessary, stop the entire middleware change, don't call next
  }

  next();
};
