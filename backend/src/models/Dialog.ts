import mongoose, { Schema, Document } from "mongoose";

export interface IDialog extends Document {
  partner: Schema.Types.ObjectId;
  author: Schema.Types.ObjectId;
  messages: Array<Schema.Types.ObjectId>;
}

const DialogSchema = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" }
  },
  {
    timestamps: true
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
