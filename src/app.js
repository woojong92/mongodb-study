const express = require('express')
const bodyParser = require('body-parser');
const api = require('./api');
const app = express()
const port = 3000
const MONGO_URI = 'mongodb://localhost:27017/test_db';

const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useFindAndModify: false 
}).then(() => {
  console.log('Connected to MongoDB')
}).catch(e => {console.log(e);})

app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})