import { Router } from 'express';
import {DeckController} from "../controllers/deckController";

const decksRoutes = Router();

decksRoutes.post("/deck", DeckController.create);

decksRoutes.get("/deck/:uuid", DeckController.open);

decksRoutes.put("/deck/:uuid/drawCards/:numberOfCards", DeckController.drawCards);

export { decksRoutes };