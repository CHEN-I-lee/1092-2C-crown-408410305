var express = require('express');
var router = express.Router();


const categories = require('../data/categories');
const crown2controller_05 = require('../controllers/crown2controller_05');
//const db = require('../utils/database');
//const category = require('../models/categoryModel_05');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_05', { 
      title: '李昣儀 408410305 (static)',
      data:categories });
});


router.get('/homepage', crown2controller_05.getHomepage );
router.get('/shop_05/:product', crown2controller_05.getProductsByCategory);
module.exports = router;
