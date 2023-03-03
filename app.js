var express = require('express');



var usersRouter = require('./routes/users');


const AuthenticationMiddleware = require('./middleware/authentication');

const authRouter = require('./routes/auth');


var app = express();



app.listen(4000,()=>{
    console.log("application has been started");
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//app.use(AuthenticationMiddleware);

app.use('/auth', authRouter);

app.use('/users',AuthenticationMiddleware, usersRouter);

module.exports = app;
