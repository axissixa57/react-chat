import express from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import socket from "socket.io";

import { UserModel } from "../models";
import { createJWToken } from "../utils";

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      res.json(user);
    });
  }

  getMe = (req: any, res: express.Response) => {
    const id: string = req.user._id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      res.json(user);
    });
  };

  create = (req: express.Request, res: express.Response) => {
    const user = new UserModel(req.body);
    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch(err => {
        res.json(err);
      });
  }

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then(user => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`
        });
      });
  }

  login = (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    const errors = validationResult(req); // из документации, если указать при запросе вместо email - login, то будет ошибка
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } // из документации

    UserModel.findOne({ email }, (err, user: any) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = createJWToken(user);
        res.json({
          status: "success",
          token
        });
      } else {
        res.json({
          status: "error",
          message: "Incorrect password or email"
        });
      }
    });
  }
}

export default UserController;
