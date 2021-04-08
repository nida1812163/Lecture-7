const Product = require('../models/product.model');

//this function will perform the insert operations
exports.product_create=(req, res)=>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/list')
    });

}
//this function will load the insert form, View load
exports.product_createform=(req, res)=>{
    res.render('createform', {page:'New Product', menuId: 'createform'});
}
//This function loads the view and finds all documents in the product collection
exports.product_list=(req, res)=>{
    Product.find((err, product)=>{
        if(err){
            return next(err);
        }
        res.render('list', {page: 'List Of All Products', menuId:'list', product:product})
    });
}
//This function will perform the delete operation
exports.product_delete=(req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/list')
    })
}
//This function will perform the update operation
exports.product_updateform=(req, res)=>{
    Product.findById(req.params.id, (err, product)=>{
        if(err){
            return next(err)
        }
        res.render('update', {page:'Update Product', menuId:'update', product:product})
    })
}
exports.product_update=(req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, product)=>{
        if(err){
            return next(err)
        }
        res.redirect('/list')
    })
}