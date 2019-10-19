import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import socket from "../core/socket";
import { messagesActions } from "../redux/actions";

import { Messages as BaseMessages } from "../components";

const Messages = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  isLoading,
  user,
  removeMessageById,
  attachments
}) => {
  const [blockHeight, setBlockHeight] = useState(138);
  const [previewImage, setPreviewImage] = useState(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (attachments.length) {
      setBlockHeight(252);
    } else {
      setBlockHeight(252);
    }
  }, [attachments]);

  const onNewMessage = data => {
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
    <BaseMessages
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
      user={user}
      onRemoveMessage={removeMessageById}
      blockHeight={blockHeight}
      setPreviewImage={setPreviewImage}
      previewImage={previewImage}
    />
  );
};

export default connect(
  ({ messages, dialogs, user, attachments }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading,
    user: user.data,
    attachments: attachments.items,
  }),
  messagesActions
)(Messages);
