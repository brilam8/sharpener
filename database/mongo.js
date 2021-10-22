require('dotenv').config();
const mongoose = require("mongoose");
const db = process.env.MONGOURI;
console.log(db);

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewURLParser: true
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;