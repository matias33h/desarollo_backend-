
const path=require('path')
const express= require('express')
const ejs= require('ejs')
const cors =require('cors')
require("dotenv").config()
const app=express()

const {body, validationResult}=require('express-validator')

const conexion = require('./src/db/database')
conexion();

app.use(express.json())
app.set('view engine', 'ejs')

app.use(require("./src/routes/tareas.routes"))
app.use(require("./src/routes/user.routes"))
app.use(require("./src/routes/authRutas"))


//**  solo prueba :renderizacion
app.get('/',(req,res)=>{

    res.render('index')

})

//** 
puerto=process.env.PORT || 3000

app.listen(puerto,()=>{
console.log(`se inicio el servidor en http://localhost:${puerto}`)
})






