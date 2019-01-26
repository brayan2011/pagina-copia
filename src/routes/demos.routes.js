'use strict'

//Declaración de dependencias
const express = require('express')
const router = express.Router()
const path = require('path')

//Rutas
router.get('/', (req,res)=>{
    res.render('Demos',{title:'Demos públicos'})
})

router.get('/demo1', (req,res)=>{
    res.render('demo1',{title:"Demo 1 CocoSd"})
})

router.get('/:otro',(req,res)=>{
    res.status(404).send({mensaje:`oops! Recurso \'${req.params.otro}\' No encontrado`})
})


module.exports = router
