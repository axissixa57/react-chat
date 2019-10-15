import express from "express";
import socket from "socket.io";

import { MessageModel, DialogModel } from "../models";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: express.Response) => {
    // поиск сообщений по кокретному id dialog
    const dialogId: string = req.query.dialog;
    const userId = req.user._id;

    this.updateReadedStatus(res, userId, dialogId);

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user"])
      .exec(function(err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found"
          });
        }
        return res.json(messages);
      });
  };

  create = (req: any, res: express.Response) => {
    const userId = req.user._id;
    
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: req.user._id
    };

    const message = new MessageModel(postData);

    message
      .save()
      .then((obj: any) => {
        obj.populate(["dialog", "user"], (err: any, message: any) => {
          if (err) {
            return res.status(500).json({
              status: "error",
              message: err
            });
          }

          DialogModel.findOneAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            function(err) {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err
                });
              }
            }
          );

          res.json(message);

          this.io.emit("SERVER:NEW_MESSAGE", message);
        });
      })
      .catch(err => {
        res.json(err);
      });
  };

  delete = (req: any, res: express.Response) => {
    const id: string = req.query.id;
    const userId: string = req.user._id;

    MessageModel.findById(id, async (err, message: any) => {
      if (err || !message) {
        return res.status(404).json({
          status: "error",
          message: "Message not found"
        });
      }

      if (message.user.toString() === userId) {
        const dialogId = message.dialog;
        await message.remove();

        MessageModel.findOne(
          { dialog: dialogId },
          {},
          { sort: { createdAt: -1 } },
          (err, lastMessage) => {
            if (err) {
              res.status(500).json({
                status: "error",
                message: err
              });
            }

            DialogModel.findById(dialogId, (err, dialog: any) => {
              if (err) {
                res.status(500).json({
                  status: "error",
                  message: err
                });
              }

              dialog.lastMessage = lastMessage;
              dialog.save();
            });
          }
        );

        return res.json({
          status: 'success',
          message: 'Message deleted',
        });
      } else {
        return res.status(403).json({
          status: 'error',
          message: 'Not have permission',
        });
      }
    });
  };

  updateReadedStatus = (res: express.Response, userId: string, dialogId: string) => {
    MessageModel.updateMany(
      { dialog: dialogId, user: { $ne: userId } },
      { $set: { read: true } },
      (err: any) => {
        if (err) {
          return res.status(500).json({
            status: 'error',
            message: err,
          });
        }
      },
    );
  };
}

export default MessageController;
