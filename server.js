const express=require('express');
const expresslayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');

const app =express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://test:test@cluster0-bi1rv.mongodb.net/blogger?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true },function(err){
    if(err) console.log(err);
    else{
        console.log("db is conected");
    }
})

const indexrouter=require('./routes/index');
const bloggerrouter=require('./routes/bloggers');

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));
app.use(bodyparser.urlencoded({limit : '10mb',extended: false}));
app.use(bodyparser.json());

app.use('/',indexrouter);
app.use('/bloggers',bloggerrouter);

app.listen(process.env.PORT||3000,()=>{
    console.log("app is live");
})