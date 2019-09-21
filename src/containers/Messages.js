import React, { useEffect } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { Messages as BaseMessages } from "../components";

const Messages = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  return <BaseMessages items={items} isLoading={isLoading} />;
};

export default connect(
  ({ messages, dialogs }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading
  }),
  messagesActions
)(Messages);
