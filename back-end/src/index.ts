import "dotenv/config";
import mongoose from "mongoose";
import express from "express";

import {
  UserController
} from "./controllers";

const app = express();

app.use(express.json());

const User = new UserController();

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

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
