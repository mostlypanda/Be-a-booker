const mongoose=require('mongoose');

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//console.log(date);
const blogchema=mongoose.Schema({
    title :{
        type : String,
        required :true
    },
    description:{
        type : String,
        required: true,
    },
    published_date:{
        type: String,
        default: date
    },
    coverimagename:{
        type: String,
        required: true
    },
    blogger:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'blogger'
    }


});



module.exports=mongoose.model('blog',blogchema);