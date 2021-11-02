var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.end('done')
});

router.get('/500', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  next(createError(500));
});
module.exports = router;
