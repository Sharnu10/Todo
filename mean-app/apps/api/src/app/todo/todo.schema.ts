import { model, Schema, Model, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Todo = model('Todo', TodoSchema);
