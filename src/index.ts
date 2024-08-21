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
import { messagesRouter } from "./modules/messages/messagesRouter";
import { Server } from "socket.io";
import http from "http";

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
server.use("/messages", messagesRouter);

// handlers

server.use(notFoundHandler);
server.use(errorHandler);

// socket.io

const httpServer = http.createServer(server);
const io = new Server(httpServer, { cors: { origin: process.env.CLIENT_URL } });

io.on("connection", (socket) => {
  console.log("clint connected", socket.id);

  socket.on("joinRoom", ({ issuerId, receptorId }) => {
    const room = [issuerId, receptorId].sort().join("-");
    socket.join(room);
  });

  socket.on("message", (msg) => {
    const { issuerId, receptorId } = msg;
    const room = [issuerId, receptorId].sort().join("-");
    socket.to(room).emit("message", msg);
  });
});

// server-up

httpServer.listen(PORT, () => console.log(SERVER_ON));
