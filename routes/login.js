const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
const auth=require('../auth');

const loginModel=require('../model/loginModel');

let userid="5ee7e136f3b7482408e98b1c";

router.post('/register',function(req,res){
    const newRegister = new loginModel({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        address: "",
        password: bcryptjs.hashSync(req.body.password,10)
    });
    loginModel.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
        res.json("User already existS").status(200);
        else{
            newRegister.save();
            // res.json("User registered successfuly").status(200);
            return res.status(200).redirect('/index.html')
        }
    });
})


router.post('/enter', function(req, res){
    const email=req.body.email;
    loginModel.findOne({email:req.body.email})
    .exec()
    .then(user=>{
    console.log(user.email);
   if(user==null)
   {
    res.send("User Does not exists").status(401);
   }
   else
   {
       if(bcryptjs.compareSync(req.body.password,user.password))
       {
           const token=jwt.sign(
               {
                   email:user.email,
                   _id:user._id
               },
               'covid',
               {
                expiresIn:'1h'
               }
           );
           console.log({
               "message":"Authentication Successfull.",
               "token":token
           });
           userid=(user._id).toString();
           res.redirect('/medical.html');
        }
        else{
            res.send("Wrong Password Entered").status(401);
        }
   }
})
.catch(err=>{
    res.json(err).status(200);
})
})
router.get('/:email/:password', function(req,res){
    const emailId = req.params.email;
    const pass = req.params.password;
    loginModel.find({email: emailId})
    .exec()
    .then(details =>{
        if(details.length==0){
            res.json(false).status(200);
        }
        else if(pass===details[0].password)
        {
            res.redirect("/medicalPageLoad");
            res.json(true).status(200);
        }
        else{
            res.json(false).status(200);
        }
    })
})

router.get('/details',function(res,req){
    loginModel.find({email:'fk@gmail.com'})
    .exec()
    .then(logins=>{
        res.json(logins.cart).status(200);
    })
})


//showcart
router.get('/showCart', async(req, res) => {
    loginModel.find({_id:userid})
    .exec()
    .then(products=>{
        res.json(products[0].cart).status(200);
    })
})



module.exports=router;