import express from "express";
import socket from "socket.io";

import { DialogModel, MessageModel } from "../models";

class DialogController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }
  
  index(req: any, res: express.Response) { // все диалоги пользователя по ид
    const authorId = req.user._id; // в checkAuth.js придёт объект пользователя

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"]) // по id author, partner в DialogModel найдет их объекты со всеми значениями
      .exec(function(err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found"
          });
        }
        return res.json(dialogs);
      });
  }

  create(req: express.Request, res: express.Response) {
    const { author, partner, text } = req.body;
    const dialog = new DialogModel({ author, partner });

    dialog
      .save()
      .then((dialogObj: any) => {
        const message = new MessageModel({
          text,
          user: author,
          dialog: dialogObj._id
        });

        message
          .save()
          .then(() => {
            res.json(dialogObj);
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => {
        res.json(err);
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then(dialog => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Dialog not found`
        });
      });
  }
}

export default DialogController;
