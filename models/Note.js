import mongoose from "mongoose";
const {Schema, models, model} = mongoose;

const NoteSchema = new Schema({
    title: {type: String, required: true},
    type: {type: String, enum: ['note', 'link', 'insight'], default: 'note'},
    tags: [{type: String}],
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    summaryWithAI: {type: String, default: null}
})

export default models.Note || model("Note", NoteSchema)