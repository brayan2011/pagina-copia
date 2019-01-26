'use strict'

//Declaración de dependencias
const express = require('express');
const router = express.Router();
const path = require('path');

//Rutas
router.get('/', (req,res)=>{
    res.render('index',{title:'BeitLab'});
})

router.get('/:otro',(req,res)=>{
    res.status(404).send({mensaje:`oops! Recurso \'${req.params.otro}\' No encontrado`})
})

router.get('/.well-known/acme-challenge/pZoInhYKZJTsrYA0JiFqUvelesxUXM4tiklfd2AMhtg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../well-known/acme-challenge/pZoInhYKZJTsrYA0JiFqUvelesxUXM4tiklfd2AMhtg'))
})


module.exports = router
