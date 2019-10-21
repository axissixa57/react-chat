import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import find from "lodash/find";
import { Empty } from "antd";

import socket from "../core/socket";
import { messagesActions } from "../redux/actions";

import { Messages as BaseMessages } from "../components";

const Messages = ({
  currentDialog,
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  isLoading,
  user,
  removeMessageById,
  attachments
}) => {
  const [blockHeight, setBlockHeight] = useState(135);
  const [previewImage, setPreviewImage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef(null);
  let typingTimeoutId = null;

  const toggleIsTyping = () => {
    setIsTyping(true);
    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 500);
  };

  useEffect(() => {
    socket.on("DIALOGS:TYPING", toggleIsTyping);
  }, []);

  useEffect(() => {
    if (attachments.length) {
      setBlockHeight(245);
    } else {
      setBlockHeight(135);
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
  }, [items, isTyping]);

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
      isTyping={isTyping}
      partner={
        !currentDialog ? null : user._id !== currentDialog.partner._id ? currentDialog.partner : currentDialog.author
      }
    />
  );
};

export default connect(
  ({ messages, dialogs, user, attachments }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
    isLoading: messages.isLoading,
    user: user.data,
    attachments: attachments.items
  }),
  messagesActions
)(Messages);
