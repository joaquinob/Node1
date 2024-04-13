const mongoose = require('mongoose');
const uri = 'mongodb+srv://joaquinblanco:ugYC5tsFkWQtaDHn@joaquinob.aya3fd5.mongodb.net/upgrade?retryWrites=true&w=majority&appName=JoaquinOB'

const connectDB = async () => {
    try{
        const db = await mongoose.connect(uri);

        const {name, host} = db.connection;
        console.log(`Nombre de la base de datos: ${name}, host: ${host}`);
    }
    catch (error){
        console.error(error)
    }
};

module.exports = { connectDB };