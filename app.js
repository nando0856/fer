const express = require('express');
const app = express();
const path = require('path')


app.use(express.static('public'));
app.set('puerto', process.env.PORT || 3001);

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/register', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.post('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}`))

