import express from "express";
import socket from "socket.io";

import { DialogModel, MessageModel } from "../models";

class DialogController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: express.Response) => {
    // все диалоги пользователя по ид
    const userId = req.user._id; // в checkAuth.js придёт объект пользователя

    DialogModel.find()
      .or([{ author: userId }, { partner: userId }]) // поиск диалогов по автору или партнёру, если партнёр зайдёт в качестве юзера нужно искать по партнёру
      .populate(["author", "partner", "lastMessage"]) // по id author, partner в DialogModel найдет их объекты со всеми значениями
      .populate({
        path: "lastMessage",
        populate: {
          path: "user"
        }
      })
      .exec(function(err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found"
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req: any, res: express.Response) => {
    const postData = {
      author: req.user._id,
      partner: req.body.partner,
      text: req.body.text
    };

    DialogModel.findOne(
      {
        author: postData.author,
        partner: postData.partner
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err
          });
        }
        if (user) {
          return res.status(403).json({
            status: "error",
            message: "Такой диалог уже есть"
          });
        } else {
          const dialog = new DialogModel({
            author: postData.author,
            partner: postData.partner
          });

          dialog
            .save()
            .then((dialogObj: any) => {
              const message = new MessageModel({
                user: postData.author,
                dialog: dialogObj._id,
                text: postData.text
              });

              message
                .save()
                .then(() => {
                  dialogObj.lastMessage = message._id;
                  dialogObj.save().then(() => {
                    res.json(dialogObj);
                    this.io.emit("SERVER:DIALOG_CREATED");
                  });
                })
                .catch(reason => {
                  res.json(reason);
                });
            })
            .catch(err => {
              res.json({
                status: "error",
                message: err
              });
            });
        }
      }
    );
  };

  delete = (req: express.Request, res: express.Response) => {
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
  };
}

export default DialogController;
