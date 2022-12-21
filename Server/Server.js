//Require:
require('./Src/Connection/connection');
const express = require('express');
const App = express();
const cors = require('cors');
const Student = require('./Src/Routes/StudentRoute');

//Middleware;
App.use(express.json());
App.use(cors({origin:'https://cred-task.netlify.app'}))

//Route Controller;
App.use('/',Student);

//Port Listing;
const PORT = process.env.PORT || 4000;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});