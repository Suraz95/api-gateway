const axios = require("axios");
const config = require("../config");
const compile = async (language, data) => {
  
  return await axios.post(`${config.compileServiceUrl}/${language}`, data);
};
module.exports = {
  compile,
};