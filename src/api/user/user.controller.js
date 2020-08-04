var express = require('express');
var router = express.Router();
var service = require('../../services/user/user.services');

const newVar = new service();


router.post('/addUserData', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.addUserData(req,res);
});

router.get('/retrieveUserData', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.retrieveUserData(req,res);
});

router.put('/updateUserData', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.updateUserData(req,res);
});

router.delete('/deleteUserData', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.deleteUserData(req,res);
});

router.get('/retrieveUserDataById/:id', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.retrieveUserDataById(req,res);
});


module.exports = router;
