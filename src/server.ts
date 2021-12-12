import express from "express";
import mongoose from "mongoose";
import { decksRoutes } from "./routes/decks.routes";

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
);

app.use(express.json());

app.use(decksRoutes);

app.listen(3333);
