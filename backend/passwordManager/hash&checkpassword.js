const bcrypt = require('bcrypt');

const hashPassword = async (pass)=>{
    const password = await bcrypt.hash(pass,6);
    return password
}

const checkPassword = async (pass,hash)=>{
    const bool = await bcrypt.compare(pass,hash);
    return bool;
}


module.exports = {hashPassword,checkPassword}