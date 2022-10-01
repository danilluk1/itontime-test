import { Schema, model, SchemaType } from "mongoose";

const RsvpSchema = new Schema({
  schema: {type: Schema.Types.ObjectId, ref: 'Settings'},
  data: {type: String, required: true},
  // name: { type: String, required: true },
  // description: { type: String, required: true },
  // date: { type: Date, required: true },
});

export default model("Rsvp", RsvpSchema);
