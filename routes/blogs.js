const express=require('express');
const router=express.Router();
const Blog=require('../models/blog');
const path=require('path')
const Blogger=require('../models/blogger');
const { response } = require('express');
const uploadPath=path.join('public',Blog.coverimagebasepath)
const multer=require('multer');
const { render } = require('ejs');
const imagemimetypes=['images/jpeg','images/png']
const upload=multer({
    dest: uploadPath,
    fileFilter:(req,file,callback)=>{
        callback(null,)
    }
})

// All blogs
router.get('/',async (req,res)=>{
   res.send('All Blogs');
});

// new blog
router.get('/new',async (req,res)=>{
    rendernewpage(res, new Blog())
});
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

async function rendernewpage(res,blog,error=false){
    try{
        const blogger=await Blogger.find({});
        const params={
            blogger : blogger,
            blog: blog
        } 
       if(error)params.errormessage='Error in publishing a blog'
        res.render('blogs/new',params);
    } catch{
        res.redirect('/blog')
    }
};



// create a blog
router.post('/',upload.single('cover'), async (req,res)=>{
    const filename=req.file!=null ? req.file.filename : null
    const blog=new Blog({
        blogger: req.body.blogger,
        title: req.body.title,
        published_date:date,
        content: req.body.content,
        coverimagename: filename
    });
    console.log(blog);
    try{
     const newblog=await blog.save();
     res.redirect('blog')   
    }catch{
            rendernewpage(res,blog,true);
    }
});

module.exports=router;