import { NotFoundHandler } from "../types";

export const notFoundHandler: NotFoundHandler = (_req, res) => {
  res.status(404).json({ msg: "Oops! Route not found 👀" });
};
