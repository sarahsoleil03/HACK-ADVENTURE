var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  const context={
    title: 'Profile',
    name: 'Sarah',
    age: '14',
    position: 'Student',
    hobbies: ['art','eating', 'talking'],
  }
  res.render('profile',{tittle: 'Express'});
});

module.exports = router;
