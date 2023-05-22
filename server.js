const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;

const URI = 'mongodb+srv://vercel-admin-user:Ilovemywife123@cluster0.rmskjpq.mongodb.net/posts'

app.use(cors({
    allowedHeaders: ["Accept", "Content-Type"],
  }));
  
app.use(express.json());

//connect to mongoose
mongoose.connect(URI)
.then(()=>{
  console.log('Connect to MongoDB')
})
//require route
// app.use('/', (req, res)=>{
//  res.send("Home")
// });
app.use('/', require('./routes/postRoute'));
app.listen(port, () => {
    console.log('Server is Running.');
})