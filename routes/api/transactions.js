const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const moment = require('moment');
const queryString = require('querystring');

// Import utilities
const {getCleanTransactions} = require('../../utils/transactions')

// Import the transaction model
const Transaction = require('../../models/transaction');

// @route   GET api/transaction
// @desc    GET all transactions
// @access  Private
router.get('/', auth, async (req,res) => {

    const startDate = req.query.startDate? req.query.startDate:moment.utc(0);
    const endDate = req.query.endDate? req.query.endDate:moment.utc().endOf('days');
    const category = req.query.category? req.query.category:/./;
    const type = req.query.type? req.query.type:/./;
    const $gte = moment.utc(startDate).startOf('days');
    const $lt = moment.utc(endDate).startOf('days');  
        try{
        let transactions = await Transaction.find({userid: req.id, date:{ $gte,$lt}, category: { $regex : new RegExp(category,'i') }, type: { $regex : new RegExp(type,'i') }}).sort('-date');

        // Clean up Transactions before responding
        transactions = getCleanTransactions(transactions);
        res.status(200).json({
            transactions,
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            error: 'Could not get all transactions. Try again later.'
        })
    }
    
})

// @route   POST api/transaction
// @desc    Add a new transaction
// @access  Private
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