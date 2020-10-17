const express = require('express');
const router = express.Router();


router.post('/add', (req,res) => {
    console.log('Posting to transactions');
})

router.get('/view', (req,res) => {
    console.log('Getting from transactions');
    res.status(200).json({
        message: 'You have all transactions now'
    })
})

module.exports = router;