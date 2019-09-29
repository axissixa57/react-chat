import express from "express";
import { UserModel } from "../models";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "5d89ea61d8a3641e1cb73d51" },
    {
      fullname: "Dmitry Aksenov",
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};
