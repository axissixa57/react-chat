import React from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { ChatInput } from "../components";

const ChatInputContainer = ({ fetchSendMessage, currentDialogId }) => {
  if(!currentDialogId) {
    return null;
  }

  return <ChatInput fetchSendMessage={fetchSendMessage} currentDialogId={currentDialogId}/>
}

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInputContainer);
