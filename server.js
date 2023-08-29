const express= require ('express');
const dotenv =require ('dotenv')
const connectDB = require('./db');
const cors = require('cors'); 
const path=require('path');
//configure env
dotenv.config();
//database config
connectDB;
  
const Pizza = require('./models/pizzaModel');
const db = require('./db');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./client/build')));

const pizzasRoute = require('./routes/pizzaRoutes');
const userRoute = require('./routes/userRoute');


app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);

app.use('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
 /*  console.log(`Server running on port ${port}`); */
});
