const setUserDataToResearch = 'INSERT INTO user SET ?';
const getLoginInfor = 'SELECT u.user_name, u.password, u.category, f.farmer_id FROM user u, farmer f WHERE u.user_name = ? AND f.user_id = u.user_id'; //make user_name unique in db
const setDataToFarmer = 'INSERT INTO farmer SET ?';
const getCropDetails = 'SELECT * FROM crop';
const setCropDetails = 'INSERT INTO crop_farmer SET farmerid = ?, cropid = ?';//need to fix autoincrement on db orelse will get error, must implement way to get farmerid from the token instead of the body. 
const updateUserTable = 'UPDATE user SET token = ? WHERE user_id = ?';
const addSession = 'INSERT INTO session_table SET ?';
const addDataToVendor = 'INSERT INTO vendor SET ?';
const setDataToResearcher = 'INSERT INTO researcher SET ?';
const getSessionDetails = 'SELECT * FROM session_table';

//const setProductDetails = 'INSERT INTO product SET ?';

module.exports = {
    setUserDataToResearch:setUserDataToResearch,
    getLoginInfor:getLoginInfor,
    setDataToFarmer:setDataToFarmer,
    getCropDetails:getCropDetails,
    setCropDetails:setCropDetails,
    updateUserTable:updateUserTable,
    addSession:addSession,
    addDataToVendor:addDataToVendor,
    setDataToResearcher:setDataToResearcher,
    getSessionDetails:getSessionDetails
    //setProductDetails:setProductDetails
};
