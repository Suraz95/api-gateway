// config/index.js
require("dotenv").config();

module.exports = {
  authServiceUrl: process.env.AUTH_SERVICE_URL,
  compileServiceUrl: process.env.COMPILE_SERVICE_URL,
  port: process.env.PORT || 5000,
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173", 
};
