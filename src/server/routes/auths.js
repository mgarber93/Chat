const express = require('express');
const middleware = require('../middlewares');
const urlencodedParser = require('body-parser');

const router = express.Router();

const resWithUser = (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
}

router.route('/')
  .get(resWithUser);

router.route('/login')
  .post(
    urlencodedParser, 
    middleware.passport.authenticate('local-login'), 
    resWithUser
  );

router.route('/signup')
  .post(
    middleware.passport.authenticate('local-signup'), 
    resWithUser
  );

router.route('/logout')
  .all((req, res) => {
    req.logout();
    res.redirect('/');
  });

module.exports = router;
