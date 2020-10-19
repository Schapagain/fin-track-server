
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Import the user model
const User = require('../../models/user');
const { getCleanUsers } = require('../../utils/users');

// @route   POST api/users
// @desc    Add a new user
// @access  Public
router.post('/', async (req,res) => {

    let {name,email,password} = req.body;

    if (!name || !email || !password){
        return res.status(400).json({
            success: false,
            error: "Please provide all required user properties"
        })
    }

    // Check if the user already exists
    try{
        let oldUser = await User.findOne({ email })
        if (oldUser) {
            return res.status(400).json({
                success: false,
                error: "Email has already been registered"
            })
        }
    }
    catch(err){
        return sendServerError(err,res);
    }

    // Hash the password to store in the database
    try{
        password = await generatePasswordHash(password);
    }
    catch(err){
        return sendServerError(err,res);
    }

    // create a mongoose model for the new user
    let newUser = new User({name,email,password});

    try{
        let user = await newUser.save();

        // Clean up Transactions before sending the user back
        user = getCleanUsers(user).pop();

        res.status(200).json({
            success: true,
            user,
        })
    }
    catch(err){
        return sendServerError(err,res);
    }
})

const generatePasswordHash = async passwordPlain => {
    try{
        const saltRounds = 5;
        const passwordHash = await bcrypt.hash(passwordPlain, saltRounds);
        return passwordHash;
    }
    catch(err){
        throw err;
    }
}

const sendServerError = (err,res) => {
    console.log(err);
    res.status(500).json({
        success: false,
        error: 'Could not add a new user. Try again later.'
    })
}

module.exports = router;