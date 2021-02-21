require('dotenv').config();
const express = require("express");
const connectDB = require("./database/mongo");
const cors = require('cors');
const validUrl = require("valid-url");
const shortUrlRoute = require("./routes/shorturl")
const getShortenUrlRoute = require("./routes/getshortenurl")

const app = express();
app.use(express.static('public'));
connectDB();

app.use(express.json({}));
app.use(cors());
const PORT = 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));


app.use("/v1/",getShortenUrlRoute)
app.use("/v1/shorturl", shortUrlRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});