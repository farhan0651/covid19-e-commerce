const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');

const cartModel=require('../model/cartModel');
const loginModel=require('../model/loginModel');
const auth=require("../auth");
const { getMaxListeners } = require('../model/cartModel');


router.put('/:email',auth, function(req,res){
    const newProduct = new cartModel({
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        imageSRC:req.body.imageSRC
    });
    // newProduct.save();
    const cartitem=newProduct;
    loginModel.findOneAndUpdate({email:req.params.email},{$push:{cart:cartitem}})
    .exec()
    .then(logins=>{
        console.log(logins.name);
    })
    .catch(err=>{
        res.json(err).status(200);
    })
    res.json('items Added').status(201);
});

router.put('/remove/:email',function(req,res){
    const email=req.params.email;
    const pname=req.body.productName;
    loginModel.find({email:email})
    .exec()
    .then(logins=>{
        console.log(logins.name);
        for(let i=0;i<logins.cart.length;i++)
        {
            console.log(logins.cart[i]);
            if(logins.cart[i].productName===pname)
            logins.cart[i].$pull(logins.cart[i]);
        }
        console.log(logins.cart);
        res.json("Item Removed Successfully").status(200);
    }).catch(err=>{
        res.json(err).status(200);
    });
});


const email="fk@gmail.com";

//showCart
router.get('/showCart', async(req, res) => {
    loginModel.find({email:email})
    .exec()
    .then(products=>{
        res.json(products[0].cart).status(200);
    })
})

module.exports=router;