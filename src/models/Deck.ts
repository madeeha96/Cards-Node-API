import mongoose from 'mongoose';

const DeckSchema = new mongoose.Schema({
    deckId: String,
    type: String,
    shuffled: String,
    remaining: Number,
    cards: [{value: String, suit: String, code: String} ]
});

const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;
