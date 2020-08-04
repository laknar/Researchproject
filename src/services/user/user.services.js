var userQuery = require('../../loaders/user/userQuery');
var utilService = require('../utils/utils.services');

var useQueries = new utilService();


class User{
 
    async methodName1(req, res){
        var created_date = new Date();
        const data = {
            blog_title: req.body.blog_title,
            blog_content: req.body.content,
            blog_small_desc: req.body.description,
            created_date: created_date,
            blog_featured_img: req.body.text,
            blog_status:req.body.status
        };
        const response = await useQueries.asynqQuery(userQuery.setDataToBlogQuery, data);

        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }
}

module.exports = User; 