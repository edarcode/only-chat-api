import "./utils/dotenv";
import express from "express";
import cors from "cors";
import { notFoundHandler } from "./server/notFoundHandler";
import { errorHandler } from "./server/errorHandler";
import { PORT, SERVER_ON } from "./server/consts";
import { welcomeRouter } from "./modules/welcome/welcomeRouter";
import { authRouter } from "./modules/auth/authRouter";
import { usersRouter } from "./modules/users/usersRouter";
import { followsRouter } from "./modules/follows/followsRouter";
import { messageRouter } from "./modules/messages/messageRouter";

// server

const server = express();

// middlewares

server.use(cors());
server.use(express.json());

// routes

server.use("/", welcomeRouter);
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/follows", followsRouter);
server.use("/msg", messageRouter);

// handlers

server.use(notFoundHandler);
server.use(errorHandler);

// server-up

server.listen(PORT, () => console.log(SERVER_ON));
