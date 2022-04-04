const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/Certificados',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Banco Conectado')
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(PORT, ()=>{ console.log(`Server Runnig on port ${PORT}`)});