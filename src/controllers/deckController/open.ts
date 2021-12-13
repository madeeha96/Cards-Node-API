import { Request, Response } from 'express';
import DeckModel from '../../models/Deck';
import {ERROR_MESSAGE } from '../../models/Constants';
import { Deck } from '../../entities/deck';

export const open = async (request: Request, response: Response) => {
    const { uuid } = request.params;
    
    const deck : Deck = await DeckModel.findOne({deckId: uuid});

    if(!deck) response.status(404).json({error: ERROR_MESSAGE});

    return response.json(deck);
}