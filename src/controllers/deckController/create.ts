import { Request, Response } from 'express';
import { Deck } from "../../entities/deck";
import { v4 as uuidV4 } from 'uuid';
import {CARDS_FULL_DECK,CARDS_SHORT_DECK} from "../../models/Constants";
import DeckModel from "../../models/Deck";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const create = async (request: Request, response: Response) => {
  let { type = "FULL", shuffled = false } = request.body;

  let cards: any;
  let remaining: number;

  if (type === "FULL") {
    cards = CARDS_FULL_DECK;
    remaining = 52;
  } else {
    cards = CARDS_SHORT_DECK;
    remaining = 36;
    type = "SHORT";
  }

  if (shuffled) shuffleArray(cards);

  const deck : Deck = await DeckModel.create({ deckId: uuidV4(), shuffled, type, remaining: remaining, cards: cards });

  return response.json({deckId: deck.deckId, type: deck.type, shuffled: deck.shuffled, remaining: deck.remaining});
};
