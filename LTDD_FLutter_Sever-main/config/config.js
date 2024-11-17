
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Kết nối với MongoDB
    await mongoose.connect(
      "mongodb+srv://baochung_101124:Pbc19402400@fluttercluster.vavrq.mongodb.net/?retryWrites=true&w=majority&appName=flutterCluster",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.error("Connect failure!!!", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
