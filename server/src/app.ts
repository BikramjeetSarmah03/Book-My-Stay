import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORIGINS,
    credentials: true,
  })
);

app.use("/api/v1", routes);

app.all("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, message: "🟢Server Working...🔴Route NOT Found" });
});

export default app;
