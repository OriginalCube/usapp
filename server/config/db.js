const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to Database");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDb;
