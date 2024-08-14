import "./utils/dotenv";
import express from "express";
import cors from "cors";

import { notFoundHandler } from "./server/notFoundHandler";
import { errorHandler } from "./server/errorHandler";
import { PORT, SERVER_ON } from "./server/consts";
import { welcomeRouter } from "./modules/welcome/welcomeRouter";

// server

const server = express();

// middlewares

server.use(cors());
server.use(express.json());

// routes

server.use("/", welcomeRouter);

// handlers

server.use(notFoundHandler);
server.use(errorHandler);

// server-up

server.listen(PORT, () => console.log(SERVER_ON));
