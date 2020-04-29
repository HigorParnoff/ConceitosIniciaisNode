const express = require('express');
const app = express();

const userRouter = require('./routes/user.routes');

//Ativa o body da req. Para acessar o body!
app.use(express.urlencoded({extended: true}));
//Tratar json
app.use(express.json());
app.use(userRouter);


module.exports = app;