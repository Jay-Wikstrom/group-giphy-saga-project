const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();


router.get('/:search', (req, res) => {

    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            //api_key: 
            api_key: process.env.GIPHY_API_KEY,
            //This is users inputs (data before sent to the internet)
            q: req.params.search, 
            limit: 12
        }
    }).then(response => {
        console.log('axios response', response.data);
        res.send(response.data);
    }).catch(err => {
        res.sendStatus(500)
    })


  
})

module.exports = router;