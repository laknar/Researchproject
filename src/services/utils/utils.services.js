var con = require('../../config/dbconnect');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();
var intformat = require('biguint-format'), FlakeId = require('flake-idgen')
var pathNode = require('path');
const Email = require('email-templates');
var base64Img = require('base64-img');
const bcrypt = require('bcryptjs');

class Utils{
    
    asynqQuery(query, params) {
        return new Promise((resolve, reject) => { //ask Anju what the promise concept is
            con.query(query, params, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    async imageUploader(req,res){
       /** let fileName = [];
    if (typeof req.files.imageFile.length !== 'undefined') {
        for (let a = 0; a < req.files.imageFile.length; a++) {
            const image = req.files.imageFile[a];
            const extention = pathNode.extname(image.name);
            const fName = intformat(flakeIdGen.next(), 'dec') + '' + extention;
            const path = './public/uploads/images/' + fName;
            fileName.push(fName);
            image.mv(path, (err) => {
                if (err) {
                    console.log(err);                    
                    // return res.status(400).send({message: err});
                }
            });
        }
    } else {
        const image = req.files.imageFile;
        const extention = pathNode.extname(image.name);
        const fName = intformat(flakeIdGen.next(), 'dec') + '' + extention;
        const path = './public/uploads/images/' + fName;
        fileName.push(fName);
        image.mv(path, (err) => {
            if (err) {
                console.log(err);
                // return res.status(400).send({message: err});
            }
        });
    }
    return res.status(200).send({message: 'Success', data: fileName});*/
    }
}
module.exports = Utils;