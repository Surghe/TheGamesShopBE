import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true, enum: ['Board', 'Video', 'Card', 'Other', 'Dice']},
    price: {type: Number, required: true},
    desc: {type: String}, 
    qty: {type: Number, required: true},
});

export default mongoose.model('Game', gameSchema);