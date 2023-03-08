//Mongoose (BBDD)
const mongoose = require('mongoose');

//env var call
const dbLink = process.env.DB_URL;

//connect to bbdd
const connectDB = async() =>{
    try {
        mongoose.set('strictQuery', true)
        const db = await mongoose.connect(dbLink);
        const { host } = db.connection;
        console.log('Connected to host ->' +host);
    } catch (error) {
        console.log('<ERROR> Can t connect to BBDD!!! ', error);
    }
}

module.exports = { connectDB }
