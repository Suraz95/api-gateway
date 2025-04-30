const { Router } = require('express');
const router = Router();
const { signIn,signOut,registerUser } = require('../controllers/authservice.controller.js')
router.post('/signIn', signIn);
router.post('/signOut', signOut);
router.post('/signUp', registerUser);

module.exports = router;