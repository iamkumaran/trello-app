import mongoose from "mongoose";
const ObjectId = new mongoose.Types.ObjectId;
import { Board, Todo } from './mongoSchema';

export default {
    Query: {
        board: async(parent, args) => {
            return await Board.findOne(args);
        },
        boards: async(parent, args) => {
            return await Board.find({});
        },
        todo: async(parent, args) => {
            return await Todo.findOne(args);
        }
    },
    Board: {
        todos: async(args) => {
            return await Todo.find({ boardId: args._id }, {});
        }
    },
    Mutation: {
        createBoard: async (parent, args) => {
            const board = await new Board({
                _id: new mongoose.Types.ObjectId(),
                ...args
            }).save();
            return board;
        },
        createTodo: async (parent, args) => {
            let position = await Todo.count({ boardId: args.boardId });
            const todo = await new Todo({
                _id: new mongoose.Types.ObjectId(),
                ...args
            }).save();

            return todo;
        }
    }
};
