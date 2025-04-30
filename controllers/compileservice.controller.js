const compileService = require("../services/compileservice.js");

const compileCode = async (req, res, next) => {
  try {
    const { code, stdin = "" } = req.body; // Extract from body
    const { language } = req.params; // Extract from URL param

    const response = await compileService.compile(language, { code, stdin }); // ✅ Correct now
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  compileCode,
};
