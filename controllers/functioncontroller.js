//get json data
const mongoose = require("mongoose")
const UserModel = require("../models/user")
const ApiModel=require("../models/backupapi")
const fs = require("fs");
// import App from "../frontend/loginapp/src/App";
exports.getjsonfunction=(req,res)=>{
    res.status(200).json({
        id:"1"
    })};


//get home.html
exports.gethomefunction=(req,res)=>{
    res.status(200).sendFile('home.html' , { root : __dirname});

 
}

//get textfile
exports.gettextfunction=(req,res)=>{
    res.status(200).sendFile('aman.txt' , { root : __dirname});

 
}

//get string
exports.getfunction=(req, res) => {
    res.status(200).send('Hello World!')
  }
  exports.getinitialpage=(req, res) => {
    res.status(200).sendFile('../frontend/loginapp/src/index' , { root : __dirname});
  }

  //post data in json format and print 
  exports.postfunction=(req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
}
 exports.checkuser=(req,res)=>{
    let username =req.body.username;
    let password = req.body.password;
      
    let body = {
        username,
        password
    }
    const user = UserModel.findOne({username: req.body.username});
    const pass=UserModel.findOne({password: req.body.password});
     if(user && pass){
        res.redirect("/home")
     }
 }
exports.postsignup= (req, res) => {
    
    


    let username =req.body.username;
    let password = req.body.password;
      
    let body = {
        username,
        password
    }

    const userobj = new UserModel(req.body);

    userobj.save()
      .then(result => {
        console.log("new user data")
       console.log(result)
       
      })
      .catch(err => {
        console.log(err);
      });
      res.status(200).sendFile('confirm.txt' , { root : __dirname});
  }

  exports.postapidata=(req,res)=>{
    console.log("body");
    console.log(req.body);
 const apiobj=new ApiModel(req.body);
const checkifcity=ApiModel.findOne({city:req.body.city});


ApiModel.find({ city:req.body.city })
.then((res)=> {
    console.log("find one worked");
 if(res.length==0){
    apiobj.save()
 .then(result => {
   console.log("api data added")
  console.log(result)
  
 })
 .catch(err => {
   console.log(err);
 })
 }
  else{
        console.log("city already here")
        ApiModel.updateOne({city:req.body.city},{weather:req.body.weather,temperature:req.body.temperature}).then(
            (result)=>{
                console.log("updated :)")
            }
        );
  }
})
.catch(function (err) {
  console.log(err);
});



  }

exports.weatherfromdata=(req,res)=>{
    const cityfind=req.query.city;
    
ApiModel.findOne({ city:req.query.city }).then(
    (result)=>{
        res.send(result)
        console.log(result);
    }
  
)
}