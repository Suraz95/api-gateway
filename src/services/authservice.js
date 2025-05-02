const axios = require("axios");
const config = require("../config");

const login = async (data) => {
  return await axios.post(`${config.authServiceUrl}/signIn`, data);
};

const register = async (data) => {
  return await axios.post(`${config.authServiceUrl}/signUp`, data);
};
const logout = async (data) => {
  return await axios.post(`${config.authServiceUrl}/signOut`, data);
}

module.exports = {
  login,
  logout,
  register,
};
