var userQuery = require('../../loaders/user/userQuery');
var utilService = require('../utils/utils.services');

var useQueries = new utilService();


class User{
 
    async addUserData(req, res){
        var created_date = new Date();
        const data = {
            blog_title: req.body.blog_title,
            blog_content: req.body.blog_content,
            blog_small_desc: req.body.blog_small_desc,
            created_date: created_date,
            blog_featured_img: req.body.blog_featured_img,
            blog_status:req.body.blog_status
        };
        console.log(req.body);

        const response = await useQueries.asynqQuery(userQuery.setDataToBlogQuery, data);

        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }
    
    async retrieveUserData(req, res){
        var created_date = new Date();
        
        console.log(req.body);

        const response = await useQueries.asynqQuery(userQuery.getDataFromBlogQuery);

        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }

    async updateUserData(req, res){
        var created_date = new Date();
        
        console.log(req.body);

        const response = await useQueries.asynqQuery(userQuery.updateDataToBlog, [req.body.blog_title, req.body.blog_content, req.body.blog_small_desc, created_date, req.body.blog_featured_img, req.body.blog_status, req.body.blog_id]);

        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }

    async deleteUserData(req, res){
        var created_date = new Date();
        
        console.log(req.body);

        const response = await useQueries.asynqQuery(userQuery.deleteDataFromBlog, req.body.blog_id);

        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }

    async retrieveUserDataById(req, res){
        var created_date = new Date();
        
        console.log(req.params.id);

        const response = await useQueries.asynqQuery(userQuery.getUserDataById, req.params.id);
        console.log(response);
        //console.log(req.body);
        return res.status(200).send({message:'Success', data : response});
    }

}

module.exports = User; 