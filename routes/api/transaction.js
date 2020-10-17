const express = require('express');
const router = express.Router();


router.post('/', (req,res) => {
    console.log('Posting to transactions');
})

router.get('/', (req,res) => {
    console.log('Getting from transactions');
})

module.exports = router;