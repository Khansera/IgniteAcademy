const express=require('express');
const app=express();
const path=require('path')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get(['/','/home'],(req,res)=>{
    res.render('index')
})











app.listen('3000',()=>{
    console.log('server started on port 3000')
})