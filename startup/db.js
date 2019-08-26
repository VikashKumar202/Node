const mongoose=require('mongoose');
const config=require('config');
const winston=require('winston');
module.exports=function(){
    const db=config.get('db');
    mongoose.connect("mongodb+srv://vikash:espl123@myfirstcluster-bhteb.mongodb.net/nodeproject?retryWrites=true&w=majority",{useNewUrlParser:true})
    .then(()=>winston.info(`Connected to ${db}...`));
};

