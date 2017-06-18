'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/garbage',function(req,res){
    //const randomInt = (n)=>Math.round(Math.random()*n);
    //res.json(randomInt(10));
    res.json(Math.random());
  });

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
