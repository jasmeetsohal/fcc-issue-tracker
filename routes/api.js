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
    // ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
      // let objectToSave;
      // ({objectToSave} = {req['body']});
    
  //    { project: 'apitest' } { issue_title: 'asdf',
  // issue_text: 'asdf',
  // created_by: 'adsf',
  // assigned_to: 'adsf',
  // status_text: 'adsf' }
      let reqBody = req.body;
      let objectToSave=req.body;
      objectToSave.status = true;
      mongo.save(objectToSave).then((result,err)=>{
         console.log("result saved :: ",result);
      }).catch(e=>console.log(e));
      
      
    })
    
    .put(function (req, res){
      var project = req.params.project;
      
    })
    
    .delete(function (req, res){
      var project = req.params.project;
      
    });
    
};
