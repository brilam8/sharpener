const express = require('express');
const Url = require('../database/schema/url');
require('dotenv').config();

var getShortenUrlRoute = express.Router();
getShortenUrlRoute.get('/:shortUrl', async (req, res) => {
    var shortUrlCode = req.params.shortUrl;
    console.log(shortUrlCode);
    var url = await Url.findOne({ urlCode: shortUrlCode });

    try {
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(400).json('The short url doesn\'t exists in our system.');
        }
    }
    catch (err) {
        console.error('Error while retrieving long url for shorturlcode ' + shortUrlCode);
        return res.status(500).json('There is some internal error.');
    }
})

module.exports = getShortenUrlRoute;