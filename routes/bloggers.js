const express=require('express');
const router=express.Router();
const Blogger=require('../models/blogger');

// All bloggers
router.get('/',async (req,res)=>{
    let searchoptions={};
    if(req.query.name!=null && req.query.name!==''){
        searchoptions.name=new RegExp(req.query.name,'i')
    };
    try{
        const bloggers=await Blogger.find(searchoptions);
        res.render('bloggers/index',{
            blogger:bloggers,
            searchoptions:req.query
        });

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