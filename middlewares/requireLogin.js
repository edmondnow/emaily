module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
    //next is not necessary, stop the entire middleware change, don't call next
  }

  next();
};
