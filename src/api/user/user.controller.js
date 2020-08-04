var express = require('express');
var router = express.Router();
var service = require('../../services/user/user.services');

const newVar = new service();


router.post('/getAll', async function (req, res) {
    
    //var captData = req.body.name + ' HARINDI ';
    newVar.methodName1(req,res);
});


module.exports = router;
