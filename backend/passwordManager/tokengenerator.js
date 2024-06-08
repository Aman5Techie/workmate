require("dotenv").config();
const jwt = require("jsonwebtoken");

const getToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_KEY);
  return token;
};

const validateToken = (token) => {
 try {
    jwt.verify(token, process.env.JWT_KEY);
    return true;
    
 } catch (error) {
    return false;
 }
};

module.exports = {getToken,validateToken}