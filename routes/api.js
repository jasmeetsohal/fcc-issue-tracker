/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
const mongo = require('../controller/mongo.js');


module.exports = function (app) {
  
  app.route('/api/issues/:project')
  
    .get(function (req, res){
      var project = req.params.project;
      
      
    })
    
    .post(function (req, res){
      let reqBody = req.body;
      let objectToSave=req.body;
      objectToSave.status = true;
      objectToSave.created_on = new Date();
      objectToSave.updated_on = new Date();
      mongo.save(objectToSave).then((result,err)=>{
         console.log("result saved :: ",result);
      }).catch(e=>console.log(e));
      
      
    })
    
    .put(function (req, res){
      var project = req.params.project;
      
    })
    
    .delete(function (req, res){
      var project = req.params.project;
      console.log("body   :::: ",req.body);
      
    });
    
};
