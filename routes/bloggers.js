const express=require('express');
const router=express.Router();
const Blogger=require('../models/blogger');

// All bloggers
router.get('/',(req,res)=>{
    res.render('bloggers/index');
});

// new blogger
router.get('/new',(req,res)=>{
    res.render('bloggers/new',{blogger: new Blogger()});
});

// create blogger
router.post('/',(req,res)=>{
    res.send('create');
});




module.exports=router;