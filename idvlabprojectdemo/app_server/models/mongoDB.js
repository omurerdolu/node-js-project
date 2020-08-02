var mongoose = require('mongoose');
var kullanici = require('./users');
mongoose.connect('mongodb+srv://omurerdolu:121314abc@cluster0.jozk8.mongodb.net/idvlab?retryWrites=true&w=majority',(error)=>{
    if(!error){
        console.log("connected");
    }
});

