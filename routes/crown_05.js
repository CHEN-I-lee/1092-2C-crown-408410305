var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_05', { title: '李昣儀 408410305' });
});

module.exports = router;
