const mongoose=require('mongoose');

const bloggerschema=mongoose.Schema({
    name :{
        type : String,
        required :true
    }
});



module.exports=mongoose.model('blogger',bloggerschema);