import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  user: Schema.Types.ObjectId;
  text: string;
  dialog: Schema.Types.ObjectId;
  unread: boolean;
}

const MessageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String }, 
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", required: true },
    read: { type: Boolean, default: false },
    attachments: [{ type: Schema.Types.ObjectId, ref: 'UploadFile' }],
  },
  {
    timestamps: true
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
