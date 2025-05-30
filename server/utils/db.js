require("dotenv").config(); 
const mongoose = require("mongoose");

//const mongoURL = "mongodb://127.0.0.1:27017/merAuth"; // No username/password required
//const mongoURL = mongodb+srv://rajan12345:rajan@321@cluster0.49fkh.mongodb.net/merAuth?retryWrites=true&w=majority&appName=Cluster0;
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection successful to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
