const mongoose = require('mongoose');


 var mongoURL ='mongodb+srv://ayeshanasim789:mongodbayesha7@cluster0.grdry07.mongodb.net/ecom-website-2023'; 
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongodb connection successful');
});
db.on('error', () => {
  console.log('Mongodb connection failed');
});
module.exports = mongoose;
 
/* const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error in mongo db  ${error }`);
  }
};
module.exports = connectDB; */