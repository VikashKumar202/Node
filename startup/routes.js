const express=require('express');
const auth=require('../routes/auth');
const users=require('../routes/users');
const mobiles=require('../routes/mobiles');


module.exports =function(app){
    app.use(express.json());
    app.use('/api/users',users);
    app.use('/api/auth',auth);
    app.use('/api/mobiles',mobiles);
    
};