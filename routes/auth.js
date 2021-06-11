const express = require('express')
const router = express.Router()


const { signup, signin, signout, requireSignIn } = require('../controllers/auth');
const { userSignUpValidator } = require("../validator");


router.post('/signup', userSignUpValidator, signup);
router.post('/signin', signin);
router.post('/signout', signout);

module.exports = router;