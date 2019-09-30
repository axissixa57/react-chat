import "dotenv/config";
import mongoose from "mongoose";
import express from "express";

import {
  UserController,
  DialogController,
  MessageController
} from "./controllers";

import { updateLastSeen, checkAuth } from "./middleware";
import { loginValidation } from './utils/validations';

const app = express();

app.use(express.json());
app.use(updateLastSeen);
app.use(checkAuth);

const User = new UserController();
const Dialog = new DialogController();
const Message = new MessageController();

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
app.post('/user/login', loginValidation, User.login);

app.get("/dialogs", Dialog.index);
app.delete("/dialogs/:id", Dialog.delete);
app.post("/dialogs", Dialog.create);

app.get("/messages", Message.index);
app.post("/messages", Message.create);
app.delete("/messages/:id", Message.delete);

app.listen(process.env.PORT, () =>
  console.log(`Server: http://localhost:${process.env.PORT}`)
);
