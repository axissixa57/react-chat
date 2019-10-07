import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import socket from "../core/socket";
import { messagesActions } from "../redux/actions";

import { Messages as BaseMessages } from "../components";

const Messages = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user, removeMessageById }) => {
  const messagesRef = useRef(null);

  const onNewMessage = data => {
    console.log(data)
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage); // сообщение придёт с сервера через сокет и попадёт в ф-цию

    return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight); // при открытии диалога scroll будет всегда внизу (чтобы отобразить последние сообщения)
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} user={user} onRemoveMessage={removeMessageById} />
  );
};

export default connect(
  ({ messages, dialogs, user }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading,
    user: user.data
  }),
  messagesActions
)(Messages);
