//Required And connections;
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
const Link = process.env.LINK

mongoose.connect(`${Link}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Student data connected");
}).catch((error) => {
    console.log(error);
})