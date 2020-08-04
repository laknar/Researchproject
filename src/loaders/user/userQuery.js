const setDataToBlog = 'INSERT INTO Blog SET ?';
const getDataFromBlog = 'SELECT * FROM Blog';

module.exports = {
    
    setDataToBlogQuery:setDataToBlog,
    getDataFromBlogQuery:getDataFromBlog

};
