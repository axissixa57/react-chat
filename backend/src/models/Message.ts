import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  user: Schema.Types.ObjectId;
  text: string;
  dialog: Schema.Types.ObjectId;
  unread: boolean;
}

// TODO: Сделать аттач файлов
// attachemets:
const MessageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true }, 
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", required: true },
    unread: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
