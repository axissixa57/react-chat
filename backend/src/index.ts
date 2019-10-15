import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";

import "./core/db";
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app = express();
const http = createServer(app); // для socket.io
const io = createSocket(http); // для socket.io

app.use(cors());

createRoutes(app, io);

http.listen(process.env.PORT, () =>
  console.log(`Server: http://localhost:${process.env.PORT}`)
);
