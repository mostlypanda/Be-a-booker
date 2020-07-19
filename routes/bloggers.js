const express=require('express');
const router=express.Router();
const Blogger=require('../models/blogger');

// All bloggers
router.get('/',async (req,res)=>{

    try{
        const bloggers=await Blogger.find({});
        res.render('bloggers/index',{blogger:bloggers});

    }catch{
        res.redirect('/');
    }

   
});

// new blogger
router.get('/new', (req,res)=>{
    res.render('bloggers/new',{blogger: new Blogger()});
});

// create blogger
router.post('/',async (req,res)=>{
    const blogger=new Blogger({
        name: req.body.name
    });

    try{

        const newblogger=await blogger.save();
        res.redirect('bloggers')

    }catch{
        res.render('bloggers/new',{
            blogger: blogger,
            errormessage : "error creating blogger"
        })
    }

});




module.exports=router;