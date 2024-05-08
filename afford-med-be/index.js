const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8000;

function dbConnection () {
   mongoose.connect(process.env.MONGODB_URL)
   .then(()=> console.log('Db connected Successfully'))
   .catch((error)=> console.log('Db connection Failed:',error));

}
dbConnection();
app.use(express.json());
app.use(cors({origin:true,credentials:true}));

app.get('/',(req,res) => {
   res.status(200).json({message:"Server running"})
})


app.listen(PORT, ()=> {
   console.log(`http://loaclhost:${PORT}/`);
})