const { asyncHandler,ApiError,ApiResponse } = require('shared-utils');
const { login, logout, register } = require("../services/authservice.js")

const signIn = asyncHandler(async (req, res) => {
  try {
    const response = await login(req.body);
    return res
      .status(200)
      .json(new ApiResponse(200, response.data, "Login successful"));
  } catch (error) {
    throw new ApiError(
      error.response?.status || 500,
      error.response?.data?.message || "Sign in failed"
    );
  }
});
const signOut = asyncHandler(async (req, res) => {
  try {
    const response = await logout(req.body);
    return res
      .status(200)
      .json(new ApiResponse(200, response.data, "Logout successful"));
  } catch (error) {
    throw new ApiError(
      error.response?.status || 500,
      error.response?.data?.message || "Sign out failed"
    );
  }
});
const registerUser = asyncHandler(async (req, res) => {
  try {
    const response = await register(req.body);
    return res
      .status(200)
      .json(new ApiResponse(200, response.data, "Registration successful"));
  } catch (error) {
    throw new ApiError(
      error.response?.status || 500,
      error.response?.data?.message || "Registration failed"
    );
  }
});
module.exports = {
  signIn,signOut,registerUser
};