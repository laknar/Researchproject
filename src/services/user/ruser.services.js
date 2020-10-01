const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();
var intformat = require('biguint-format'), FlakeId = require('flake-idgen');
var hashPassword;
var utils = require('../utils/utils.services');
var Query = require('../../loaders/user/ruserQuery');
const jwt = require('jsonwebtoken');
var base64Img = require('base64-img');

var UtilService = new utils();

class ruser{

async registerUserFarmer(req, res) {
    try {

        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(req.body.password, salt);

    } catch (err) {

    }
    
        const regUserDetails = {
            user_name:req.body.user_name,
            password:hashPassword,
            fullname:req.body.fullname,
            location:req.body.location,
            category:req.body.category,
            research_center:req.body.research_center 
           // token: intformat(flakeIdGen.next(), 'dec')
        };
        try {
            var token = intformat(flakeIdGen.next(), 'dec');
            const response = await UtilService.asynqQuery(Query.setUserDataToResearch, regUserDetails);
            console.log(res);
            await UtilService.asynqQuery(Query.updateUserTable , [token, response.insertId]);
            const newob = {user_id:response.insertId};
            const responseFarmer = await UtilService.asynqQuery(Query.setDataToFarmer, newob);
            const uni = intformat(flakeIdGen.next(), 'dec');

            
           // const token = jwt.sign({unique: uni, email: req.body.gen_p_email, userType: req.body.UserCategory_user_category_id, name: req.body.gen_p_full_name, companyId : req.body.Company_company_id}, process.env.TOKEN_SECRET);             
           // await UtilService.asynqQuery(userQuery.updateVerficationSenderDetailsQuery,[uni, response.insertId]);
        } catch (e) {
            return res.status(400).send({message: e});
          } finally {
            return res.status(200).send({message: 'Success'});
          }
}

async registerUserVendor(req, res) {
    try {

        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(req.body.password, salt);

    } catch (err) {

    }
    
        const regUserDetails = {
            user_name:req.body.user_name,
            password:hashPassword,
            fullname:req.body.fullname,
            location:req.body.location,
            category:req.body.category,
            research_center:req.body.research_center 
           // token: intformat(flakeIdGen.next(), 'dec')
        };
        try {
            var token = intformat(flakeIdGen.next(), 'dec');
            const response = await UtilService.asynqQuery(Query.setUserDataToResearch, regUserDetails);
            await UtilService.asynqQuery(Query.updateUserTable , [token, response.insertId]);
            const newob = {user_id:response.insertId};
            const responseVendor = await UtilService.asynqQuery(Query.addDataToVendor, newob);
            const uni = intformat(flakeIdGen.next(), 'dec');
           // const token = jwt.sign({unique: uni, email: req.body.gen_p_email, userType: req.body.UserCategory_user_category_id, name: req.body.gen_p_full_name, companyId : req.body.Company_company_id}, process.env.TOKEN_SECRET);             
           // await UtilService.asynqQuery(userQuery.updateVerficationSenderDetailsQuery,[uni, response.insertId]);
        } catch (e) {
            return res.status(400).send({message: e});
          } finally {
            return res.status(200).send({message: 'Success'});
          }
}

async registerUserResearcher(req, res) {
    try {

        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(req.body.password, salt);

    } catch (err) {

    }
    
        const regUserDetails = {
            user_name:req.body.user_name,
            password:hashPassword,
            fullname:req.body.fullname,
            location:req.body.location,
            category:req.body.category,
            research_center:req.body.research_center 
           // token: intformat(flakeIdGen.next(), 'dec')
        };
        try {
            var token = intformat(flakeIdGen.next(), 'dec');
            const response = await UtilService.asynqQuery(Query.setUserDataToResearch, regUserDetails);
            await UtilService.asynqQuery(Query.updateUserTable , [token, response.insertId]);
            const newob = {user_id:response.insertId};
            const responseFarmer = await UtilService.asynqQuery(Query.setDataToResearcher, newob);
            const uni = intformat(flakeIdGen.next(), 'dec');
           // const token = jwt.sign({unique: uni, email: req.body.gen_p_email, userType: req.body.UserCategory_user_category_id, name: req.body.gen_p_full_name, companyId : req.body.Company_company_id}, process.env.TOKEN_SECRET);             
           // await UtilService.asynqQuery(userQuery.updateVerficationSenderDetailsQuery,[uni, response.insertId]);
        } catch (e) {
            return res.status(400).send({message: e});
          } finally {
            return res.status(200).send({message: 'Success'});
          }
}


async login(req, res){

    const response = await UtilService.asynqQuery(Query.getLoginInfor, [req.body.user_name]);
    if(response.length) {
        console.log(req.body.password + "       " + response[0].password);
        const validPassT = await bcrypt.compare(req.body.password, response[0].password);
        //if (validPassT){
                const token = jwt.sign({id: response[0].user_name, pw: response[0].password, type: response[0].category, farmer_id: response[0].farmer_id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send({token : token});
           
        //} else {
         //   return res.status(400).send({message: 'Invalid email or password2'});
        //}
    } else {
        return res.status(400).send({message: 'Invalid email or password'});
    }
}

async loginResearcher(req, res){

    const response = await UtilService.asynqQuery(Query.getLoginInfor, [req.body.user_name]);
    if(response.length) {
        console.log(req.body.password + "       " + response[0].password);
        const validPassT = await bcrypt.compare(req.body.password, response[0].password);
        //if (validPassT){
                const token = jwt.sign({id: response[0].user_name, pw: response[0].password, type: response[0].category, researcher_id: response[0].researcher_id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send({token : token});
           
        //} else {
         //   return res.status(400).send({message: 'Invalid email or password2'});
        //}
    } else {
        return res.status(400).send({message: 'Invalid email or password'});
    }
}

async loginVendor(req, res){

    const response = await UtilService.asynqQuery(Query.getLoginInfor, [req.body.user_name]);
    if(response.length) {
        console.log(req.body.password + "       " + response[0].password);
        const validPassT = await bcrypt.compare(req.body.password, response[0].password);
        //if (validPassT){
                const token = jwt.sign({id: response[0].user_name, pw: response[0].password, type: response[0].category, vendor_id: response[0].vendor_id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send({token : token});
           
        //} else {
         //   return res.status(400).send({message: 'Invalid email or password2'});
        //}
    } else {
        return res.status(400).send({message: 'Invalid email or password'});
    }
}

async retrieveCropDetails(req,res){
    //this method is used to add details in to the crop table 
    const response= await UtilService.asynqQuery(Query.getCropDetails);// is the message appearing on the body of postman due to the status part incorrect
        if(!response){
            return res.status(400).send({message:response});    
        }
        return res.status(200).send({message:response});
}

async addCropDetails(req,res){
//this method is used to add details to the crop_farmer table
    const decoded = jwt.verify(req.header('authorization').split(' ')[1], process.env.TOKEN_SECRET);

    const response= await UtilService.asynqQuery(Query.setCropDetails, [decoded.farmer_id, req.body.crop_id]);// is the message appearing on the body of postman due to the status part incorrect
        if(!response){
            return res.status(400).send({message:response});    
        }
        return res.status(200).send({message:response});
}

/*async addProductDetails(req,res){
    //this method is used to add details to the crop_farmer table
        const decoded = jwt.verify(req.header('authorization').split(' ')[1], process.env.TOKEN_SECRET);
    
        const response= await UtilService.asynqQuery(Query.setProductDetails, [decoded.vendor_id, req.body.product_name]);// is the message appearing on the body of postman due to the status part incorrect
            if(!response){
                return res.status(400).send({message:response});    
            }
            return res.status(200).send({message:response});
    }*/

async addSession(req,res){

    const uni = intformat(flakeIdGen.next(), 'dec') ;
    const uploadedDoc = base64Img.imgSync(req.body.image, 'public/uploads/productseriesbanner', uni);

    var created_date = new Date();

    const sessionDetails = {
        uploaded_date:created_date,
        image: uploadedDoc.split('\\')[3],
        leaf_count:req.body.leaf_count
       // token: intformat(flakeIdGen.next(), 'dec')
    };

    const response= await UtilService.asynqQuery(Query.addSession, sessionDetails);// is the message appearing on the body of postman due to the status part incorrect
        console.log(response);
    if(!response){
            return res.status(400).send({message:response});    
        }
        return res.status(200).send({message:response});
}

async retrieveSessionDetails(req,res){

    const response= await UtilService.asynqQuery(Query.getSessionDetails);// is the message appearing on the body of postman due to the status part incorrect
        if(!response){
            return res.status(400).send({message:response});    
        }
        return res.status(200).send({message:response});
}

}

module.exports = ruser;