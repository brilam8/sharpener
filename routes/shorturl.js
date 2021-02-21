const express = require("express");
const validUrl = require("valid-url");
const config = require("config");
const Url = require("../database/schema/url");
require('dotenv').config();

var shortUrlRoute = express.Router();

shortUrlRoute.post("/", async (req, res)=>{
    const longUrl = req.body.longUrl;
    const shortDesired = req.body.shortUrl;
    const urlCode = shortDesired;
    const baseUrl = process.env.baseURL;
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json("Internal error. Please come back later.");
    }


    if(validUrl.isUri(longUrl)){

        try{
            var url = await Url.findOne({longUrl : longUrl});
            if(url){
                return  res.status(200).json(url);
            }else{

                const shortUrl = baseUrl + "/" + shortDesired;
                url  = new Url({
                    longUrl,
                    shortUrl,
                    shortDesired,
                    urlCode,
                });
                
                await url.save()
                return res.status(201).json(url);
            }
        }catch(err){
            console.error(err.message);
            return res.status(500).json("Internal Server error " + err.message);
        }
    }else{
        res.status(400).json("Invalid URL. Please enter a vlaid url for shortening.");
    }    
});

module.exports = shortUrlRoute;