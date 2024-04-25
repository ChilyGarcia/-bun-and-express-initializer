import type { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.json({ message: "User list" });
};
