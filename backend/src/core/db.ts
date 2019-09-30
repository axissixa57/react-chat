import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/chat",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  err => {
    if (err) console.log(`Error in DB connection : ${err}`);
    else console.log("MongoDB Connection Succeeded.");
  }
);
