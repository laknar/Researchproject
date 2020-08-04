const setDataToBlog = 'INSERT INTO Blog SET ?';
const getDataFromBlog = 'SELECT * FROM Blog';
const updateDataToBlog = 'UPDATE Blog SET blog_title = ?, blog_content = ?, blog_small_desc = ?, created_date = ?, blog_featured_img = ?, blog_status = ? WHERE blog_id = ?';
const deleteDataFromBlog = 'DELETE FROM Blog WHERE blog_id = ?';
const getUserDataById = 'SELECT * FROM Blog WHERE blog_id =?';

module.exports = {
    
    setDataToBlogQuery:setDataToBlog,
    getDataFromBlogQuery:getDataFromBlog,
    updateDataToBlog:updateDataToBlog,
    deleteDataFromBlog: deleteDataFromBlog,
    getUserDataById: getUserDataById

};


