var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/test', function(req, res, next) {
  res.render('about',{tittle: 'Express'});
});



module.exports = router;
