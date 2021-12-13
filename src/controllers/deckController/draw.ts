import { Request, Response } from 'express';
import DeckModel from '../../models/Deck';
import {ERROR_MESSAGE } from '../../models/Constants';
import { Deck } from '../../entities/deck';
import { Card } from '../../entities/card';
 export const drawCards = async (request: Request, response: Response) => {
        const { uuid, numberOfCards } = request.params;

        const numberOfCardsInt = Number.parseInt(numberOfCards);

        const deck : Deck = await DeckModel.findOne({deckId: uuid});
        
        if(!deck) response.status(404).json({error: ERROR_MESSAGE});

        const resultCards : Card[] = deck.cards.splice(0, numberOfCardsInt);
        
        deck.remaining = deck.cards.length;

        await DeckModel.findOneAndUpdate({deckId: uuid}, deck);

        return response.json(resultCards);
    }