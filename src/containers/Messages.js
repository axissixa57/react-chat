import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { Messages as BaseMessages } from "../components";

const Messages = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId, fetchMessages]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight); // при открытии диалога scroll будет всегда внизу (чтобы отобразить последние сообщения)
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
};

export default connect(
  ({ messages, dialogs }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading
  }),
  messagesActions
)(Messages);
