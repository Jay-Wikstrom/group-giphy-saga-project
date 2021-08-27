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
            q: req.params.search, //Will need to change later
            limit: 12
        }
    }).then(response => {
        console.log('axios response', response.data);
        res.send(response.data);
    }).catch(err => {
        res.sendStatus(500)
    })


    // axios({
    //     method: 'GET',
    //     url: 'https://api.giphy.com/v1/gifs/search',
    //     params: {
    //         //api_key: 
    //         api_key: process.env.GIPHY_API_KEY,
    //         q: 'sports', //Will need to change later
    //         limit: 12
    //     }
    // }).then(response => {
    //     console.log('axios response', response.data);
    //     res.send(response.data.data);
    // }).catch(err => {
    //     res.sendStatus(500)
    // })
})

module.exports = router;