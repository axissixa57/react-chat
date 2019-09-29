import express from "express";
import { validationResult } from "express-validator";

import { UserModel } from "../models";
import { createJWToken } from "../utils";

class UserController {
  show(req: express.Request, res: express.Response) {
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

  getMe() {
    // TODO: Сделать возвращение инфы о самом себе (аутентификация)
  }

  create(req: express.Request, res: express.Response) {
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

  delete(req: express.Request, res: express.Response) {
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

  login(req: express.Request, res: express.Response) {
    const { email, password } = req.body;

    const errors = validationResult(req); // из документации
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } // из документации

    UserModel.findOne({ email }, (err, user: any) => {
      if (err) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      const token = createJWToken(user);
      res.json({
        status: "success",
        token
      });
    });
  }
}

export default UserController;
