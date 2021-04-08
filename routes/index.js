var express = require('express');
const product_controller = require('../controllers/product.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home' });
});
//about us
router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About', menuId:'about' });
});
//contact us
router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId:'contact' });
});
//view products
router.get('/list', product_controller.product_list);
//view created form
router.get('/createform', product_controller.product_createform);
//view create
router.post('/create', product_controller.product_create);
//deleting product
router.post('/:id/delete', product_controller.product_delete);
//update form
router.post('/updateform/:id', product_controller.product_updateform);
router.post('/:id/update', product_controller.product_update);

module.exports = router;
