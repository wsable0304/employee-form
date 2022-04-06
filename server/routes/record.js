const express = require("express");
const recordRoutes = express.Router();
// connect db
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// get a list of all records.

recordRoutes.route("/record").get(function(req,res){
    let db_connect = dbo.getDb("empData");
    db_connect
      .collection("records")
      .find({})
      .toArray(function(err,result){
          if(err)throw err;
          res.json(result);
          
      });
});

//create a new record.
recordRoutes.route("/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      ename: req.body.ename,
      designation: req.body.designation,
      contact: req.body.contact,
      skills: req.body.skills,
      dob: req.body.dob,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });






  module.exports = recordRoutes;