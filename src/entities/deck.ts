import { Card } from "./card";

export interface Deck {
  deckId: string;
  type: string;
  shuffled: string;
  remaining: number;
  cards: Card[];
}
