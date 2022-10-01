import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import { rsvpRouter } from "./router/rsvpRouter";
import { settingsRouter } from "./router/settingsRouter";
import cors from "cors";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(rsvpRouter);
app.use(settingsRouter);
app.use(errorMiddleware);

async function start() {
  try {
    await mongoose.connect(process.env.DB_CONN);
    console.log("Connected to MongoDB");

    app.listen(port, () => console.log(`Express started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
}

start();
