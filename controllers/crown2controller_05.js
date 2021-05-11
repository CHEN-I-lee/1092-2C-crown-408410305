
const category_05 = require('../models/categoryModel_05');
const clothing_05 = require('../models/clothingModel_05');

exports.getHomepage = async (req, res) => {
    let data;
    const [rows] = await category_05.fetchAll();
    data = rows;
    //res.json(data);
    res.render('crown2_05', { 
        title: '李昣儀 408410305(async/await)',
        data  });
  }

  exports.getProductsByCategory = async (req, res) => {
    console.log('req.params',req.params.product);
    let data = {};
    data.cid = 0;
    if(req.params.product === 'hats') data.cid= 1;
    else if (req.params.product === 'jackets') data.cid= 2;
    else if (req.params.product === 'mens') data.cid= 5;
    else if (req.params.product === 'sneakers') data.cid= 3;
    else if (req.params.product === 'womens') data.cid= 4;

    const [rows] = await clothing_05.getProductsByCategory(data.cid);
    data.clothing = rows;
   // res.json(data);
    if(data.cid== 4){
         res.render('womens', { 
        title: '李昣儀 408410305(async/await)',
        data  });
    }
    if(data.cid== 1){
        res.render('hats', { 
       title: '李昣儀 408410305(async/await)',
       data  });
   }
    
  }

