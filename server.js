const express = require('express');
const app = express();
const router = require('./routes/router');
require('dotenv').config();
const port = process.env.PORT;
const initDB = require('./src/db/index')

initDB()

app.use(express.json());
app.use(router);



app.listen(port, ()=> {
    console.log(`Server Running in port ${port}`)
});