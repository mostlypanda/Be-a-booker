const express=require('express');
const router=express.Router();
const Blog=require('../models/blog');
const Blogger=require('../models/blogger');
const { response } = require('express');

// All blogs
router.get('/',async (req,res)=>{
   res.send('All Blogs');
});

// new blog
router.get('/new',async (req,res)=>{
    try{
        const blogger=await Blogger.find({}); 
        const blog=new Blog();
        res.render('blogs/new',{
            blogger : blogger,
            blog: blog
        })
    } catch{
        res.redirect('/blog')
    }
});

// create a blog
router.post('/',async (req,res)=>{
    res.send('create Blog');
});

module.exports=router;