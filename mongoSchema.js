import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String
});

const TodoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    boardId: { type: Schema.Types.ObjectId, ref: 'Board' },
    description: String
});

export const Board = mongoose.model('Board', BoardSchema);
export const Todo = mongoose.model('Todo', TodoSchema);
