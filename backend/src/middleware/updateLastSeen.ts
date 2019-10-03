import express from "express";
import { UserModel } from "../models";

export default ( // обновление последней даты посщения чата
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: req.user._id },
    {
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};
