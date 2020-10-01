var express = require('express');
var router = express.Router();
var service = require('../../services/user/ruser.services');
const verify = require('../../services/jwtVerify.service');
var GeneralQueryService = require('../../services/utils/utils.services');
const generalQuery = new GeneralQueryService();

const newVar = new service();


router.post('/registerUserInfo', async function (req, res) {
    //registers the farmer
    //var captData = req.body.name + ' HARINDI ';
    newVar.registerUserFarmer(req,res);
});

router.post('/registerUserVendor', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.registerUserVendor(req,res);
});

router.post('/registerUserResearcher', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.registerUserResearcher(req,res);
});

router.post('/checklogin', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.login(req,res);
});

router.get('/getCropDetails', verify, async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.retrieveCropDetails(req,res);
});

router.post('/setCropDetails', verify, async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.addCropDetails(req,res);
});

/*router.post('/setProductDetails', verify, async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.addProductDetails(req,res);
});*/

router.post('/setSession', verify, async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.addSession(req,res);
});

router.post('/saveImage',verify, (req, res) => {
    console.log(req);
   // generalQuery.imageUploader(req,res);
});

router.get('/getSessionResults', verify, async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.receiveSessionDetails(req,res);
});

module.exports = router;