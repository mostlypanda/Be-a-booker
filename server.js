const express=require('express');
const app =express();
const expresslayouts=require('express-ejs-layouts');


const indexrouter=require('./routes/index');


app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));

app.use('/',indexrouter);


app.listen(process.env.PORT||3000,()=>{
    console.log("app is live");
})