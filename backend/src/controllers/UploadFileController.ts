import express from "express";

import { UploadFileModel } from "../models";

class UploadFileController {
  create = (req: any, res: express.Response) => {
    const userId = req.user._id;
    const file = req.file;

    const fileData = {
      filename: file.originalname,
      size: file.bytes,
      ext: file.format,
      url: file.url,
      user: userId
    };

    const uploadFile = new UploadFileModel(fileData);

    uploadFile
      .save()
      .then((fileObj: any) => {
        res.json({
          status: "success",
          file: fileObj
        });
      })
      .catch((err: any) => {
        res.json({
          status: "error",
          message: err
        });
      });
  };

  delete = () => {};
}

export default UploadFileController;
