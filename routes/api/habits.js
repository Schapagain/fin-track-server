const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const moment = require('moment');
const queryString = require('querystring');

// Import utilities
const {getCleanTransactions} = require('../../utils/transactions')

// Import the transaction model
const Habit = require('../../models/habit');

/**
 * Route to get all habits
 * @name    api/habits
 * @method  GET
 * @access  Private
 * @inner
 * @param   {string} path
 * @param   {callback} middleware - Authenticate  
 * @param   {callback} middleware - Handle HTTP response
*/
router.get('/', auth, async (req,res) => {

        try{
        let habits = await Habit.find({userid: req.id});

        res.status(200).json({
            habits,
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            error: 'Could not get all habits. Try again later.'
        })
    }
    
})

/**
 * Route to add a new transaction
 * @name    api/transactions
 * @method  POST
 * @access  Private
 * @inner
 * @param   {string} path
 * @param   {callback} middleware - Authenticate  
 * @param   {callback} middleware - Handle HTTP response
*/
router.post('/', auth, async (req,res) => {

    const {title,amount,category,type,date} = req.body;

    if (!title || !amount || !type || !category || !date){
        return res.status(400).json({
            error: "Please provide all required transaction properties"
        })
    }

    // Replace newTransaction with mongoose model
    const newTransaction = new Transaction({userid:req.id,title,amount,category,type,date});

    try{
        let transaction = await newTransaction.save();

        // Clean up Transactions before responding
        transaction = getCleanTransactions(transaction).pop();

        return res.status(200).json({
            transaction,
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error: 'Could not add a new transaction. Try again later.'
        })
    }
})

module.exports = router;