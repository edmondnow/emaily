const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

var stripe = require('stripe')(keys.stripeSecretKey);
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    //req.body is course of body parser middleware
    //console.log(req.body)
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    //req.user is courtesy of passport
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
