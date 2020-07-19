const express=require('express');
const router=express.Router();
const Blog=require('../models/blog');
const { response } = require('express');

// All blogs
router.get('/',async (req,res)=>{
   res.send('All Blogs');
});

// new blog
router.get('/new', (req,res)=>{
    res.send('New Blog');
});

// create a blog
router.post('/',async (req,res)=>{
    res.send('create Blog');
});

module.exports=router;