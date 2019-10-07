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
  };

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

  findUsers = (req: any, res: express.Response) => {
    const query: string = req.query.query;
    UserModel.find()
      .or([{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }])
      .then((users: any) => res.json(users))
      .catch((err: any) => {
        return res.status(404).json({
          status: 'error',
          message: err,
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(req.body);

    user
      .save()
      .then((obj: any) => {
        res.json({
          status: "success"
        });
      })
      .catch(err => {
        res.status(500).json({
          status: "error",
          message: err
        });
      });
  };

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
  };

  login = (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    const errors = validationResult(req); // из документации, если указать при запросе вместо email - login, то будет ошибка
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } // из документации

    UserModel.findOne({ email }, (err, user: any) => {
      if (err || !user) {
        // если юзера нет в базе
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
        res.status(403).json({
          status: "error",
          message: "Incorrect password or email"
        });
      }
    });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash = req.query.hash;

    if (!hash) {
      return res.status(422).json({ errors: "Invalid hash" });
    }

    UserModel.findOne(
      { confirm_hash: hash },
      (err, user) => {
        if (err || !user) {
          return res.status(404).json({
            status: "error",
            message: "Hash not found"
          });
        }

        user.confirmed = true;
        user.save(err => {
          if (err) {
            return res.status(404).json({
              status: "error",
              message: err
            });
          }
  
          res.json({
            status: "success",
            message: "Аккаунт успешно подтвержден!"
          });
        });
      }
    );
  };
}

export default UserController;
