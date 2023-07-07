const express=require("express")
const router=express.Router();
const appcontroller=require("../../controllers/functioncontroller");
router.get('/getjson',appcontroller.getjsonfunction)
router.get('/home',appcontroller.gethomefunction)
router.get('/text',appcontroller.gettextfunction)
router.post('/apidata',appcontroller.postapidata)
 router.get('/sendweather',appcontroller.weatherfromdata)
router.post('/signup',appcontroller.postsignup)
router.post('/check',appcontroller.checkuser)
module.exports=router;
