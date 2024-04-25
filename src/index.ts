import express from "express";
import userRouter from "./routes/user.routes.ts";

const app = express();

app.use("/api", userRouter);

app.listen(Bun.env.PORT, () => {
  console.log(`listening on port ${Bun.env.PORT}`);
});
