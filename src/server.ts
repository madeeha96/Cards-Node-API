import express from "express";
import mongoose from "mongoose";
import { decksRoutes } from "./routes/decks.routes";
import bodyParser from "body-parser";

const app = express();

mongoose.connect('mongodb://deck:27017/deck-of-cards');

app.use(express.json())
app.use(express.urlencoded())

app.use(decksRoutes);

app.listen(3333);
