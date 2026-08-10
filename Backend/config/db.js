const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // ⚠️ REPLACE THIS STRING WITH YOUR ACTUAL MONGODB LINK FROM MONGO ATLAS
    const connStr = "YOUR_ACTUAL_MONGODB_CONNECTION_STRING_HERE";

    const conn = await mongoose.connect(connStr);
    console.log(`🌱 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;